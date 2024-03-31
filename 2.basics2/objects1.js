                                        //objects(*imp)

//how to declare symbol
const sym=Symbol("mynum1");

//2 methods of declaration
//object literal        //you can give any data type

const obj1={
    name:"kai",
    "full name":"kai hiwatari",//keys are always stings so take "" if using space separated literals
    mail:"kai@gmail.com",
    age:18,
    [sym]:"key1",//cant declare here,you have to create it outside and call it here
    location: "jaipur",
    is_logged_in: false,
    last_login: ["monday","tuesday"]
}
//how to access elements in object
console.log(obj1.mail);
console.log(obj1.age);

// "." operator fails in many cases
//use []operator, but inside it everything except symbol is called by " " operator
console.log(obj1.sym); //gives undefined
console.log(obj1[sym]);
console.log(obj1.location);//works okay
console.log(obj1["full name"]);//(.) operator wont work

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






