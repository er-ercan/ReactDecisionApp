import React from 'react';

const Header = (props) => (
	<div className='header'>	
		<div className='container'>
		<h1 className='hearder__title'>{props.title}</h1>
		{props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
		<h3>{props.sub}</h3>
		</div>
	</div>
);

Header.defaultProps = {
	title: "Indecesion Applicaton",
	sub: "Enter your task and choose randomly - Just Do It!",
	subtitle: "GitHub React Project By Ercan Er"
};

export default Header;