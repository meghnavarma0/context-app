import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	const { ui, syntax } = theme;

	const { toggleAuth, isAuthenticated } = useContext(AuthContext);
	return (
		<nav style={{ background: ui, color: syntax }}>
			<h1>Context App</h1>
			<div onClick={toggleAuth}>
				{isAuthenticated ? 'Logged In' : 'Logged Out'}
			</div>
			<ul>
				<li>About</li>
				<li>Home</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Navbar;
