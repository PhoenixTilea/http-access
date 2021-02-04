import React from "react";

export default function Footer() {
	return (
		<footer>
			<p>
				For more information and instructions on running the app locally (for testing locally hosted servers), check this out on 
				<a href="https://github.com/phoenixtilea/http-access" target="_new">GitHub</a>.
			</p>
			<h4>Security Notice</h4>
			<p>HTTP Access neither tracks nor stores data from requests or responses. That said, it is always best when accessing external API endpoints to use the https protocol if available to prevent man-in-the-middle attacks that might capture or modify the data as it moves across the web.
			</p>
		</footer>
	);
}