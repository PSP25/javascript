//for of
//works on iterable objects

//array
const arr=["shaktiman","bhim","gojo"]

for (const i of arr) {
    // console.log(i)
}

//on objects(non iterable in for_of)
const obj1={
    name:"kai",
    id:"kai123",
    email:"kai@10123",
    age:18
}
// for (const i of obj1) {
//     console.log(i) //object is not iterable
// }

//on strings

let str="hello world"
for (const i of str) {
    // console.log(i)
}


//on maps(unique,ordered,key-value)

const mp=new Map();
mp.set("name","kai");
mp.set("id","123abc");
mp.set("email","kai@123");

for (const i of mp) {
    // console.log(i);//gives array of key value pair
}
    //solution for map 
for (const [i,j] of mp) {
    console.log(i,":-",j);
}

