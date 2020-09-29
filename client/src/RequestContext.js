import React, { useState } from "react";
import axios from "axios";
import jsonFormat from "json-format";

export const RequestContext = React.createContext();

export function RequestContextProvider(props) {
	const initResponse = {
		status: "",
		statusText: "",
		headers: "",
		body: ""
	};
	const [response, setResponse] = useState(initResponse);
	
	const send = (reqData, setError) => {
		setResponse(initResponse);
		const req = {method: reqData.reqMethod.toLowerCase()};
		if (reqData.headers) {
			try {
				req.headers = JSON.parse(reqData.headers);
			} catch (err) {
				setError("Error in request headers: " + err.message);
				return;
			}
		}
		if (reqData.body) {
			try {
				req.body = JSON.parse(reqData.body);
			} catch (err) {
				setError("Error in request body: " + err.message);
				return;
			}
		}
		
		const config = {
			params: {
				url: reqData.url
			}
		};
		axios.post("/", req, config).then(res => {
			console.dir(res);
			updateResponse(res.data);
		}).catch(err => {
			if (err.response) {
				updateResponse(err.response.data);
			} else if (err.request) {
				console.error(err.request);
			} else {
				console.error(err.message);
			}
		});
	};
	
	const updateResponse = (res) => {
		setResponse({
			status: res.status,
			statusText: res.statusText,
			headers: jsonFormat(res.headers || {}, {type: "space"}),
			body: jsonFormat(res.data || {}, {type: "space"})
		});
	};
	const value = {send, response};
	return (
		<RequestContext.Provider value={value}>
			{props.children}
		</RequestContext.Provider>
	);
}