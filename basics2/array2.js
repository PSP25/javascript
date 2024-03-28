const arr1=["hello","hi","whatsup","gdmrng"]
const arr2=["hi","die","fly","kai","tie"]

            //push,concat
             //changes the original array 
// arr1.push(arr2);        
// console.log(arr1);        //takes arr2 as an whole element

            //these below commands create new arrays
// arr1.concat(arr2);  //creates a new array after concatanation without changing original
//                     //thus store it somewhere
// const arr3=arr1.concat(arr2);
// console.log(arr3);

// //method 2 to merge 2 or more  array (streching the arrays)
// const arr4=[...arr1,...arr2,...arr3]
// console.log(arr4);

// //nested array to flat array
// const arr5=[1,2,3,4,[12,13,14],25,26,[1,1,1,1,[2,2,2,2]],5,5,5];
// const arr6=arr5.flat(Infinity);//parameter: depth till which you need to flat it
// const arr7=arr5.flat(1);
// console.log(arr6);
// console.log(arr7);

//isArray, from , of
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




