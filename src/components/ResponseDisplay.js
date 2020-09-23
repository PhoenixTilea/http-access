import React, {useContext} from "react";
import { RequestContext } from "../RequestContext";

export default function ResponseDisplay() {
	const { response } = useContext(RequestContext);
	
	return (
		<div id="response">
			<label>
				<strong>Status</strong>
				<input type="text" value={response.status || ""} readonly />
			</label>
			<label>
				<strong>Response Body</strong>
				<textarea value={response.body} readonly></textarea>
			</label>
			<label>
				<strong>Response Headers</strong>
				<textarea value={response.headers} readonly></textarea>
			</label>
		</div>
	);
}