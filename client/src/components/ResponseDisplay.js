import React, {useContext} from "react";
import { RequestContext } from "../RequestContext";
import "./ResponseDisplay.css";

export default function ResponseDisplay() {
	const { response } = useContext(RequestContext);
	
	return (
		<div id="response">
			<h2>Response</h2>
			<label id="status">
				<h3>Status</h3>
				<input 
					type="text" 
					value={response.status ? `${response.status} - ${response.statusText}` : ""} 
					readOnly 
					aria-readonly="true" 
					aria-live="polite"
					aria-atomic="true"
				/>
			</label>
			<label className="block">
				<h3>Response Body</h3>
				<textarea value={response.body} spellCheck="false" readOnly aria-readonly="true"></textarea>
			</label>
			<label className="block">
				<h3>Response Headers</h3>
				<textarea value={response.headers} spellCheck="false" readOnly aria-readonly="true"></textarea>
			</label>
		</div>
	);
}