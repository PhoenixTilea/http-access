import React, { useState } from "react";
import Dialog from "@reach/dialog";
import { RequestProvider } from "./RequestContext";
import RequestForm from "./components/RequestForm";
import ResponseDisplay from "./components/ResponseDisplay";
import Footer from "./components/Footer";
import SaveForm from "./components/SaveForm";
import ThemeForm from "./components/ThemeForm";
import "./themes.css";

export default function App() {
	const [theme, setTheme] = useState("dark-theme");
	const [showDialog, setShowDialog] = useState(false);
	const [storedData, setStoredData] = useState(JSON.parse(localStorage.getItem("savedRequests") || "[]"));
	const [reqId, setReqId] = useState("");
	const [saveData, setSaveData] = useState({});
	
	const openDialog = data => {
		setSaveData(data);
		setShowDialog(true);
	};
	
	const closedialog = () => {
		setShowDialog(false);
	};
	
	const loadData = id => {
		setReqId(id);
	};
	
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
				<RequestForm reqId={reqId} loadData={loadData} />
				<ResponseDisplay />
			</main>
			<Footer />
			<Dialog isOpen={showDialog} onDismiss={closeDialog}>
				<SaveForm request={data} dismiss={closeDialog} />
			</Dialog>
		</div>
		</RequestProvider>
	);
}