import React, { useState } from "react";
import axios from "axios";
import jsonFormat from "json-format";

const RequestContext = React.createContext();

function RequestContextProvider(props) {
	const [reqMethod, setReqMethod] = useState("GET");
	const [reqUrl, setReqUrl] = useState("");
	const [reqHeaders, setReqHeaders] = useState({});
	const [reqBody, setReqBody] = useState({});
	
	const [response, setResponse] = useState({
		status: "",
		statusText: "",
		headers: "",
		body: ""
	});
	
	const send = () => {
		const params = {
			headers: reqHeaders
		};
		let req;
		switch (reqMethod) {
			case "GET":
				req = axios.get(reqUrl, params);
			break;
			
			case "POST":
				req = axios.post(reqUrl, reqBody, params);
			break;
			
			case "PUT":
				req = axios.put(reqUrl, reqBody, params);
			break;
			
			case "DELETE":
				req = axios.delete(reqUrl, params);
			break;
			
			default: throw new Error("Invalid request method");
		}
		req.then(res => updateResponse(res))
			.catch(err => {
				if (err.response) {
					updateResponse(err.response);
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
			statusText: response.statusText,
			headers: jsonFormat(res.headers, {type: "space"}),
			body: jsonFormat(res.data, {type: "space"})
		});
	};
	
	return (
		<RequestContext.Provider value={{setReqMethod, setReqUrl, setReqHeaders, setReqBody, send, response}}>
			{props.children}
		</RequestContext.Provider>
	);
}

export { RequestContext, RequestContextProvider };