
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

//if you want to change export this same meaning ---  export {isAdult, isDrink}