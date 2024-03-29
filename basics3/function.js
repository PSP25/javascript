//functions

function sum(num1,num2=0){
    if(!num1){
        // console.log("undefined input")
        return
    }
    return num1+num2;
}
//function reference and function call
// console.log(sum);//only reference not call
// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum(null));
// console.log(sum());



//using unknown numbers of parameters
//use the rest operator(...) also called spread operator
function takeparameters(...num1){
    return num1//returns an array
}
console.log(takeparameters(100,200,300,4000));
//this way we can take atleast 2 values and then any number of values

function takeparameters2(val1,val2,...num1){
    console.log(val1+val2);
    return num1;//returns an array ignoring val1,val2
}
console.log(takeparameters2(1,2,3,44,5,7))

//objects and arrays in function

const obj={
    unsername:"kai",
    id:"1234"
}
function useObject(anyname){
    console.log(`User ${anyname.unsername} with id ${anyname.id} has logged in`)
}
useObject(obj);

//using array
const arr=[false,"beliefs",1]
function takearr(anyname){
    console.log(anyname[1])
    return 
}
takearr(arr);


