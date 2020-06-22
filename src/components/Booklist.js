import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Booklist = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	const { ui, syntax, bg } = theme;
	return (
		<div className='book-list' style={{ color: syntax, background: bg }}>
			<ul>
				<li style={{ background: ui }}>The Way Of Kings</li>
				<li style={{ background: ui }}>The Name Of The Wind</li>
				<li style={{ background: ui }}>The Final Empire</li>
			</ul>
		</div>
	);
};

export default Booklist;
