import React, { useState } from "react";
import { themes } from "../data.json";

export default function ThemeForm(props) {
	const [selected, setSelected] = useState(props.theme);
	
	const handleChange = (e) => {
		setSelected(e.target.value);
		props.changeTheme(e.target.value);
	};
	
	return (
		<form>
			<label>
				<h3>Select Theme</h3>
				<select value={selected} onChange={handleChange}>
					{themes.map(t => <option key={t.class} value={t.class}>{t.name}</option>)}
				</select>
			</label>
		</form>
	);
}