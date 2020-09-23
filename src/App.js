import React from "react";
import RequestForm from "./components/RequestForm";
import ResponseDisplay from "./components/ResponseDisplay";
import { RequestContextProvider } from "./RequestContext";

export default function App() {
	return (
		<RequestContextProvider>
			<header>
				<h1>HTTP Acess</h1>
				<em>A simple and accessible learning tool for testing HTTP operations</em>
			</header>
			<main>
				<RequestForm />
				<ResponseDisplay />
			</main>
		</RequestContextProvider>
	);
}