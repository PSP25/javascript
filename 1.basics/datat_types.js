//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
console.log(typeof outsideTemp);
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

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% stack vs heap %%%%%%%%%%%%%%%%%%%%%%%%%%%

//primitive(stack)         
    let string="hello";
    let string2=string;
    string2="kai"
    console.log(string2);
    console.log(string);
    //a copy is made and data is stored

//referenced type (heap)

    let arr=["shaktiman","chota vim"];
    console.log(arr);

    let arr2=arr;
    arr2[0]="hanuman";
    console.log(arr2);
    console.log(arr);
//original data is referenced and modified and no copy is made