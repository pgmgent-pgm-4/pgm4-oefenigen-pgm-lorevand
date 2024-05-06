import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdSunny, MdDarkMode } from "react-icons/md";

export default function ThemeSwitcher() {
	const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
	useEffect(() => {
		isDarkMode
			? document.body.classList.add("dark")
			: document.body.classList.remove("dark");
	}, [isDarkMode]);
	const handleClick = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div>
			<button onClick={handleClick}>
				{isDarkMode ? <MdSunny /> : <MdDarkMode />}
			</button>
		</div>
	);
}