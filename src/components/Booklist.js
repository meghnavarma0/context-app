import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Booklist extends Component {
	static contextType = ThemeContext;
	render() {
		const { isLightTheme, light, dark } = this.context;
		const theme = isLightTheme ? light : dark;
		const { ui, syntax, bg } = theme;
		return (
			<div
				className='book-list'
				style={{ color: syntax, background: bg }}
			>
				<ul>
					<li style={{ background: ui }}>The Way Of Kings</li>
					<li style={{ background: ui }}>The Name Of The Wind</li>
					<li style={{ background: ui }}>The Final Empire</li>
				</ul>
			</div>
		);
	}
}

export default Booklist;
