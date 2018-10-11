// arguments object - no longer bound with arrow functions

const add = (a,b) => {
   // console.log(arguments);
    return a + b;
}

console.log(add(55,1,1111));



// this keyword - no longer bound with arrow functions


const user = {
    name: "Andrew",
    cities:["Samsun","Ankara","Trabzon"],
    printPlacesLived() {
       return this.cities.map((city) => this.name + " Lived İn Same " + city); 
    }
};
console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
    numbers: [4,15,22,1,7],
    multiplyBy: 5,
    multipEquals() {
        return this.numbers.map((result) => this.multiplyBy * result);
    }
};
console.log(multiplier.multipEquals());