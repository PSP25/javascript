var a=10;
let b=30;
const c=40;
if(true){
    var a=40
    //  c=50;//cannot assign to constant variable
    let b=1;
    //  console.log(a,b,c);//scope of a,b is inside of if block
}
// console.log(a,b,c);

//scope of a function,if_else
function one(){
    let username="kai";
    function two(){
        let userid="hiwatari";
        console.log(username);
    }
    // console.log(userid);//cannot access user is as it is out of scope
    two();// two can access variable on the bigger function but not vice versa
}
one();
// two();//cannot access function inside a function
// console.log(username);//cannot access variable inside function


//++++++++++++++++++++++++++++++++++function as variable+++++++++++++++++++++++++++++++

console.log(sumone(2));//possible to call function thats describe later
function sumone(num1){
    return num1+1;
}
console.log(sumone(2));//this is also possible


//addtwo(5);
//is not possible if function is declared as a variable,calling after description is must
let addtwo=function(nums){
    return nums+2;
}
console.log(addtwo(5));