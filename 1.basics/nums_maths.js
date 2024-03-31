                                        //NUMBER FUNCTIONS
// let count=400;
// console.log(count.toString());

// let x=5463.8324
// console.log(x.toFixed(1));
// console.log(typeof x);
// console.log(x.toPrecision(5))
// console.log(x.toPrecision(4));

// let y=1000000000;
// console.log(y.toLocaleString());
// console.log(y.toLocaleString('en-IN'));


//++++++++++++++++++++++++++++++++++++++(Maths)+++++++++++++++++++++++++++++++++++++++++++++++++

//check in console typing the the following command
//console.log(Math)

//imp fun
// let x=-1234.9567;
// console.log(Math.abs(x));
// console.log(Math.round(x));
// console.log(Math.ceil(x));
// console.log(Math.floor(x))

// console.log(Math.PI)
// console.log(Math.max(1,2,3,4,5,6,7,8,9));
// console.log(Math.min(1,2,3,4,5,6,7,8,9))


//most imp "random"
console.log(Math.random());//gives result b/w 0-1

console.log((Math.random()*10) + 1); //convert it to 1-9, '1' is added for the edge cases like 0.014
                                    //
console.log(Math.floor(Math.random()*10) + 1);//removes extra decimal

const min = 10
const max = 20
//to convert it to custom range b/w max-min
console.log(Math.random() * (max - min + 1))
console.log(Math.random() * (max - min + 1) + min)

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//very imp syntax





