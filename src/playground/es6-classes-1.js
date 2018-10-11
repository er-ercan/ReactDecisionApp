
class Person {
    // constructor(name = 'Anonymous'){
    //     this.name = name || 'test';
    // }

    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        //return 'Hi. I am '+ this.name + '!';
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `Hi I am ${this.name} my age ${this.age}`;
    }     
}

class Student extends Person { //Extend ederek yukarıdakı Parent class ımızın özelliklerini kullanabildik.
    constructor(name, age, major ){
        super(name, age);
        this.major = major;
    }
   
    hasMajor() {
        return !!this.major; //major var mı yok mu kontrolu yapılıyor.
    }
    getDescription(){ //Override ettik yukarıdaki metodu super kullanmasak yukardaki metoda ulaşamayacaktık.
        let description = super.getDescription();

        if(this.hasMajor()){ //Eger Major var ise major u de ekle description u öyle return et.
            description = description + ` ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, homeLocation){
        super(name);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        
        if(this.homeLocation){
            greeting = greeting + ` I am visiting ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Ercan Er');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const third = new Student("Hande", 24, "Dentist");
console.log(third.getDescription()); 

const four = new Traveler("Hande", "Pheledepia");
console.log(four.getGreeting()); 

const five = new Traveler("Hande");
console.log(five.getGreeting()); 