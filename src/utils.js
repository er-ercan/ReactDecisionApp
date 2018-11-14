console.log('utils.js is running');

const ercan = 'bokum';

const square = (x) => {
    return(
     x*x
    )};

const add = (a,b) => a + b ;

const subtrack = (a, b) => a - b;

export {square, add, ercan, subtrack as default};

//export - named export - default export

