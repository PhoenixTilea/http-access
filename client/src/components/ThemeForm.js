import React, { useState } from "react";

const themes = ["dark", "light"];

export default function ThemeForm(props) {
	const [selected, setSelected] = useState(props.theme);
	
	const handleChange = (e) => {
		setSelected(e.target.value);
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		props.changeTheme(selected);
	};
	
	return (
		<form onSubmit={handleSubmit}>
			<label>
				<h3>Select Theme</h3>
				<select value={selected} onChange={handleChange}>
					{themes.map(t => <option key={t} value={t}>{`${t} theme`}</option>)}
				</select>
			</label>
			<button>Change</button>
		</form>
	);
}