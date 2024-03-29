// Immediately Invoked Function Expressions (IIFE)

//why?
//to protect a function from global scope pollution
//used mostly in database connections

//syntax:  ()() ======> (defination)(argument pass)

//named IIFE
(function chai(){
    console.log(`hello named IIFE`)
})();

//passing parameters
(function chai(user){
    console.log(`hello ${user}`)
    console.log("DB connected");
})("hitesh");


//IFFE functions dont know the bound, thus always end them with a semicolon
//unnamed IIFE (or) arrowed IIFE

((num1)=>{
    console.log(num1+2)
})(3);

(()=>{
    console.log(2+2)
    console.log("DB connected")
})();
