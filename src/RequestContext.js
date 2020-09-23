import React, { useState } from "react";
import axios from "axios";

const RequestContext = React.createContext();

function RequestContextProvider(props) {
	const [reqMethod, setReqMethod] = useState("GET");
	const [reqUrl, setReqUrl] = useState("");
	const [reqHeaders, setReqHeaders] = useState({});
	const [reqBody, setReqBody] = useState({});
	
	const [response, setResponse] = useState({
		status: "",
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
		}
		req.then(res => updateResponse(res))
			.catch(err => console.error(err));
	};
	
	const updateResponse = (res) => {
		setResponse({
			status: res.status,
			headers: JSON.stringify(res.headers),
			body: JSON.stringify(res.data)
		});
	};
	
	return (
		<RequestContext.Provider value={{setReqMethod, setReqUrl, setReqHeaders, setReqBody, send, response}}>
			{props.children}
		</RequestContext.Provider>
	);
}

export { RequestContext, RequestContextProvider };