import React, { useState } from "react";
import RequestForm from "./components/RequestForm";
import ResponseDisplay from "./components/ResponseDisplay";
import Footer from "./components/Footer";
import { RequestProvider } from "./RequestContext";
import ThemeForm from "./components/ThemeForm";
import "./themes.css";

export default function App() {
	const [theme, setTheme] = useState("dark-theme");
	
	return (
		<RequestProvider>
		<div id="app" className={theme}>
			<header>
				<div>
					<h1>HTTP Access</h1>
					<em>A simple and accessible REST client</em>
				</div>
				<div role="complementary">
					<ThemeForm theme={theme} changeTheme={setTheme} />
				</div>
			</header>
			<main>
				<RequestForm />
				<ResponseDisplay />
			</main>
			<Footer />
		</div>
		</RequestProvider>
	);
}