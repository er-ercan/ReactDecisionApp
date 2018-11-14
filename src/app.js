import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';

const valid = validator.isEmail('ercanatilim@.com');
console.log(valid);

const template = <p>Test 123</p>
ReactDOM.render(template, document.getElementById('app'));


//import anythingIwant, { square, add, ercan } from './utils';
//import minus, { isAdult, isDrink } from './person';
//console.log("app.js is running");
//console.log(square(5));
//console.log(add(4,6));
//console.log(ercan);
//isAdult(20);
//isDrink(33);
//console.log(anythingIwant(100, 35));
//console.log(minus(100, 5, 6));