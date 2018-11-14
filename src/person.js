
export const isAdult = (age) => {
        if(age > 18){
            console.log('Yes you re adult');
        }
        else{
            console.log('You re teenage');
        }
    };

export const isDrink = (age) => {
        if(age > 21){
            console.log('Yes you can drink');
        }
        else{
            console.log('No you can not a drink');
        }
    };

const minus = (a, b ,c) => a + (b * c);

export default minus;

//if you want to do this -> export default (a, b ,c) => a + (b * c);

//if you want to change export this same meaning ---  export {isAdult, isDrink}