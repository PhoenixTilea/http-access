const express = require("express");
const axios = require("axios");

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
		case "patch":
			request = axios[method](endpoint, body, {headers});
		break;
		default:
			res.status(500);
			return next(new Error(`There was a problem with the server. (Unrecognized HTTP method ${method}).`));
	}
	request.then(response => {
		const {status, statusText, headers, data} = response;
		return res.send({status, statusText, data, headers});
	})
	.catch(err => {
		if (err.response) {
			const {status, statusText, headers, data} = err.response;
			return res.send({status, statusText, headers, data});
		} else if (err.request) {
			res.status(400);
		return next(new Error(`There was a problem with the request: ${err.message}`));
		}
		res.status(500);
		return next(err);
	});
});

module.exports = reqRouter;