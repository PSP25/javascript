                            //array
                    //declaration, resizable, data type 
const myarr1=[1,2,3,4,5,6,7,8,9]
const myarr2=[1,2,3,false,5,6,"hello",8,9]
console.log(myarr1);
console.log(myarr2[4]);
console.log(typeof myarr1);
console.log(typeof myarr2);

myarr1.push(10,12,13)
console.log(myarr1);    //the original arr is changed
myarr2.pop();
console.log(myarr2);

                        //methods(find it in console)

//unshift
myarr1.unshift(0) //adds the element given at start of arr
console.log(myarr1);
myarr2.unshift("myname")
console.log(myarr2); //but its time consuming for big arrays

//shift
myarr1.shift();//removes an element and shifts,removes first element if nothing given
myarr2.shift("myname");
console.log(myarr1);//removed 0
console.log(myarr2);//removed it

//includes,indexOf
console.log(myarr1.indexOf(10));
console.log(myarr1.includes(3));// (T/F)

//join
const arr3=myarr1.join();
console.log(arr3);
console.log(typeof arr3);

//slice vs splice
// console.log(myarr2);
// console.log(myarr2.slice(2,5));//from [2,5) print the copy of it
// console.log(myarr2.splice(2,5));//from 3rd pos remove 5 elements
// console.log(myarr2);//changes the original array

//slice can be used to add elements to array
console.log(myarr2.splice(2,3,"hello",1,true,"1"));//delete 3 element from 3rd pos
console.log(myarr2);










