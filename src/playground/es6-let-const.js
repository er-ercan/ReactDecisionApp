var nameVar ="Ercan";
nameVar= "Mike";
console.log("nameVar",nameVar); 

let nameLet = "Hande";
nameLet = "ER";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameCOnst", nameConst);

//Block Scoping

const fullName = 'Jen Mead';
let firstName;

if(fullName){
    firstName = fullName.split(" ")[0];
    console.log(firstName);
} 
console.log(firstName);