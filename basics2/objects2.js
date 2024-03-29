////constructor method of declaration
// const obj2= new Object();
// console.log(obj2);
const obj3={};

obj3.id="abc123";
obj3.email="abc@gmail.com";
obj3.isloggedin=true;

//// console.log(obj3);

////object inside object

const obj4={
    id:"as123",
    emailid:"kai123@hmail.com",
    name:{
        username:{
            fullname:{
                firstname:"kai",
                lastname:"hiwatari"
            }
        }
    }   
}
// console.log(obj4.name.username.fullname);

////merging objects(imp)
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj5 = {5: "a", 6: "b"}

const fobj={obj1,obj2,obj3};//doesn't give the desired result
// console.log(fobj);
const assignobj= Object.assign(obj1,obj2,obj5);//returns a new obj , better to use ({},obj1,obj2,obj3)
// console.log(assignobj);

const fobj2={...obj1,...obj2,...obj3};
// console.log(fobj2);


////array of objects
const users = [
    {
        id: 1,
        email: "g@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "i@gmail.com"
    },
]
// console.log(users[2].email);

////access the keys and values separately

// console.log(obj3);

// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
// console.log(Object.entries(obj3));

// //check if a key present or not
// console.log(obj3.hasOwnProperty('loggedin'))
// console.log(obj3.hasOwnProperty('id'))

////object destructuringn
const course = {
    coursename: "js in hindi",
    price: "9990",
    courseInstructor: "kai"
}

const {courseInstructor:coach}=course;//changed the long name to shorter//used in react
console.log(coach);

//JSON files for API (Java Script Object Notation)
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
