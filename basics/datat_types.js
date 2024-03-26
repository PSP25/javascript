//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% stack vs heap %%%%%%%%%%%%%%%%%%%%%%%%%%%

//primitive(stack)         
    let string="hello";
    let string2=string;
    console.log(string2);
    console.log(string);

//referenced type (heap)

    let arr=["shaktiman","chota vim"]
    console.log(arr);

    let arr2=arr;
    arr2[0]="hanuman";
    console.log(arr2);
    console.log(arr);
