import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
	render() {
		return (
			<AuthContext.Consumer>
				{authContext => (
					<ThemeContext.Consumer>
						{themeContext => {
							const { isLightTheme, light, dark } = themeContext;
							const theme = isLightTheme ? light : dark;
							const { ui, syntax } = theme;

							const { toggleAuth, isAuthenticated } = authContext;

							return (
								<nav style={{ background: ui, color: syntax }}>
									<h1>Context App</h1>
									<div onClick={toggleAuth}>
										{isAuthenticated
											? 'Logged In'
											: 'Logged Out'}
									</div>
									<ul>
										<li>About</li>
										<li>Home</li>
										<li>Contact</li>
									</ul>
								</nav>
							);
						}}
					</ThemeContext.Consumer>
				)}
			</AuthContext.Consumer>
		);
	}
}

export default Navbar;
