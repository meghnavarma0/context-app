import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
	render() {
		return (
			<ThemeContext.Consumer>
				{context => {
					const { isLightTheme, light, dark } = context;
					const theme = isLightTheme ? light : dark;
					const { ui, syntax } = theme;

					return (
						<nav style={{ background: ui, color: syntax }}>
							<h1>Context App</h1>
							<ul>
								<li>About</li>
								<li>Home</li>
								<li>Contact</li>
							</ul>
						</nav>
					);
				}}
			</ThemeContext.Consumer>
		);
	}
}

export default Navbar;
