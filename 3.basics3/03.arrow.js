//arrow functions, this binding, regular function
//learn the key differences between arrow vs regular
//1.this binding difference
//2.arguments difference
//3.use of new keyword (constructable vs callable)
//the arrow functions are only ‘callable’ and not constructible.



const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //  console.log(this);//prints the current values of the object
    }
}
// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();

// console.log(this);   //prints empty object as no global object available
                    //same command would print window in console as it has global object 'window'

// function chai(){
//    let username = "hitesh"
//console.log(this);
    //gives a similar result to what browser console gives on printing this
//     //console.log(this.username);    // this.xxx cannot do anything in function
// }


                                    //arrow function

const chai=()=>{        //no need to use the tag (function)
    let username="hitesh";
    console.log(this); //doesnot work in arrow function,but works in the general function
    //console.log(this.username);//cannot print anything 
}
chai()  

//arrow function 
const sum=(num1,num2)=>{
    return num1+num2;
}
sum();

// const sum2=(num1,num2)=>  num1+num2
const sum2=(num1,num2)=> ( num1+num2)

                        //arrow function gives a benefit
                        //dont need to use the return statement for one liner codes
                        //use parenthesis instead
                        
// const obj=()=>{username:"jitesh",id="123asd"}//other codes might run withour parenthesis
                                                //this wont work as it thinks braces as block opener
                                                //use parenthesis to clarify
const obj=()=>({username:"jitesh",id:"123asd"})
obj();
                        

