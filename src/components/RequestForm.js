import React, { useContext, useState } from "react";
import { RequestContext } from "../RequestContext";
import "./RequestForm.css";

const methods = ["GET", "POST", "PUT", "DELETE"];

export default function RequestForm() {
	const {setReqUrl, setReqMethod, setReqHeaders, setReqBody, send } = useContext(RequestContext);
	const [fields, setFields] = useState({
		reqMethod: "GET",
		url: "",
		headers: "",
		body: ""
	});
	const [error, setError] = useState("");
	
	const handleChange = (e) => {
		const {name, value} = e.target;
		setFields(prevFields => ({...prevFields, [name]: value}));
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		setError("");
		setReqMethod(fields.reqMethod);
		setReqUrl(fields.url);
		
		if (fields.headers) {
			try {
				const headers = JSON.parse(fields.headers);
				setReqHeaders(headers);
			} catch (err) {
				setError(err);
			}
		}
		
		if (fields.body) {
			try {
				const body = JSON.parse(fields.body);
				setReqBody(body);
			} catch (err) {
				setError(err);
			}
		}
		
		if (!error) {
			send();
		}
	};
	
	return (
		<div id="request">
			<h2>Request</h2>
			<form onSubmit={handleSubmit}>
				<div id="main-request">
					<label>
						<h3>Method</h3>
						<select name="reqMethod" value={fields.method} onChange={handleChange}>
							{methods.map(m => <option key={m} value={m}>{m}</option>)}
						</select>
					</label>
					<label>
						<h3>Endpoint</h3>
						<input type="url" name="url" value={fields.url} onChange={handleChange} required />
					</label>
					<button>Send</button>
				</div>
				{error && <div className="error" role="alert">{error}</div>}
				<label className="block">
					<h3>Request Body</h3>
					<textarea name="body" value={fields.body} onChange={handleChange} spellCheck="false"></textarea>
				</label>
				<label className="block">
					<h3>Request Headers</h3>
					<textarea name="headers" value={fields.headers} onChange={handleChange} spellCheck="false"></textarea>
				</label>
			</form>
		</div>
	);
}