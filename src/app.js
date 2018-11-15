import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecesionApp';
import validator from 'validator';

ReactDOM.render(
	<IndecisionApp />, document.getElementById("app"));

//const valid = validator.isEmail('ercanatilim@.com');
//console.log(valid);