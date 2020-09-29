import React, { useState } from "react";
import RequestForm from "./components/RequestForm";
import ResponseDisplay from "./components/ResponseDisplay";
import { RequestContextProvider } from "./RequestContext";
import ThemeForm from "./components/ThemeForm";

export default function App() {
	const [theme, setTheme] = useState("dark");
	
	return (
		<RequestContextProvider><div id="app" className={`${theme}-theme`}>
			<header>
				<div>
					<h1>HTTP Acess</h1>
					<em>A simple and accessible learning tool for testing HTTP operations</em>
				</div>
				<div role="complementary">
					<ThemeForm theme={theme} changeTheme={setTheme} />
				</div>
			</header>
			<main>
				<RequestForm />
				<ResponseDisplay />
			</main>
		</div></RequestContextProvider>
	);
}