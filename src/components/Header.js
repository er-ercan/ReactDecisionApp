import React from 'react';

const Header = props => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
			<h3>{props.sub}</h3>
		</div>
	);
};

Header.defaultProps = {
	title: "Indecesion Applicaton",
	sub: "Enter your task and choose randomly",
	subtitle: "GitHub React Project By Ercan Er"
};

export default Header;