                                        //objects(*imp)

//how to declare symbol
const sym=Symbol("mynum1");

//2 methods of declaration
//object literal        //can give any data type

const obj1={
    name:"kai",
    "full name":"kai hiwatari",//keys are always stings so tke "" if using space separated literals
    mail:"kai@gmail.com",
    age:18,
    [sym]:"key1",
    location: "jaipur",
    is_logged_in: false,
    last_login: ["monday","tuesday"]
}
//how to access elements in object
console.log(obj1.mail);
console.log(obj1.age);

// "." operator fails in many cases
console.log(obj1.sym); //gives undefined
console.log(obj1[sym]);
console.log(obj1.location);
console.log(obj1["full name"]);

//change values in object
obj1.location="delhi";
obj1["age"]=21;
console.log(obj1);

//to stop changing values use .freeze
// obj1.freeze(obj1);

//add functions into object and use of this operator
obj1.greeting=function() {
    console.log(`Hello,${this["full name"]}`);
}
console.log(obj1.greeting());






