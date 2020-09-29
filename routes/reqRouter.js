const express = require("express");
const axios = require("axios");
const http = require('http');
const reqRouter = express.Router();

reqRouter.post("/", (req, res, next) => {
	const method = req.body.method.toLowerCase();
	const endpoint = req.query.url;
	const headers = req.body.headers || {};
	const body = req.body.body || {};
	
	let request;
	switch (method) {
		case "get":
		case "delete":
			request = axios[method](endpoint, { headers });
		break;
		case "post":
		case "put":
			request = axios[method](endpoint, body, {headers});
		break;
		default:
			res.status(500);
			return next(new Error(`There was a problem with the server. (Unrecognized HTTP method ${method}).`));
	}
	request.then(response => {
		const {status, statusText, resHeaders, data} = response;
		return res.send({status, statusText, data, headers: resHeaders});
	}).catch(err => {
		if (err.response) {
			return res.send(err.response);
		} else if (err.request) {
			res.status(404);
			return next(new Error("There was a problem with the request."));
		}
		res.status(500);
		return next(err);
	});
});


module.exports = reqRouter;