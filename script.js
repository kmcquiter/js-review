
// 2 strings, 1 boolean, 1 integer
// 1st pic selena, garnett, black panther = T'challa,
// Ana wong from resident evil

// Activity 1

let selena = {

    name: "Selena",
    age: "23",
    isHuman: true,
    occupation: "singer"
};

console.log(selena.name + selena.age + selena.isHuman + selena.occupation);


let garnett = {

    name: "Garnett",
    age: 5750,
    isHuman: false,
    occupation: "singer"
};

console.log(garnett.name + garnett.age + garnett.isHuman + garnett.occupation);



function AwesomePeople (name, occupation, isHuman, age ){

    this.name  = name;
    this.occupation = occupation;
    this.isHuman = isHuman;
    this.age = age;
}

let singer = new AwesomePeople("Selena", "singer", true, 23);
console.log(singer);

let cartoon = new AwesomePeople("Garnet", "superhero", false, 5750);
console.log(cartoon);



function SuperHeroes ( name, movie, isPopular,age ){

    this.name  = name;
    this.movie = movie;
    this.isPopular = isPopular;
    this.age = age;
}




let blackPanther = new SuperHeroes("T'Challa", "Black Panther", true, 30);
console.log(blackPanther);

let residentEvil = new SuperHeroes("Ada Wong", "Resident Evil", true, 24);
console.log(residentEvil);


//Activity 2

let selena = {

    name: "Selena",
    age: 23,
    isHuman: true,
    occupation: "singer",

    sayInfo: function () {

        console.log(`My name is ${this.name} and i'm ${this.age} years old,
        and i'm a ${this.occupation}.`)
    }
    

};

selena.sayInfo();


let blackPanther = {

    name: "T'Challa",
    isSuperHero: true,
    age: 37,
    occupation: "Super Hero",

    sayInfo: function () {

        console.log(`My name is ${this.name} and i'm ${this.age} years old,
        and i'm a ${this.occupation}.`)
    }
};

blackPanther.sayInfo();


//Activity 3


let selena = {

    name: "Selena",
    age: 23,
    isHuman: true,
    occupation: "singer",

    sayInfo: function () {

        console.log(`My name is ${this.name} and i'm ${this.age} years old,
        and i'm a ${this.occupation}.`)
    }
    

};

selena.sayInfo();


let blackPanther = {

    name: "T'Challa",
    isSuperHero: true,
    age: 37,
    occupation: "Super Hero",

    sayInfo: function () {

        console.log(`My name is ${this.name} and i'm ${this.age} years old,
        and i'm a ${this.occupation}.`)
    }
};

blackPanther.sayInfo();

//Activity 4

let people = ["T'Challa", "Selena", "Ada"];


let text = "";

for(let i = 0; i < people.length; i++){
    text += people[i] + "\n";

}

console.log(text);