                                        //dates
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);
                                        
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());
                                        
// let myTimeStamp = Date.now()// answermilliseconds  

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));//convert to seconds
                                        
let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

                                        
// `${newDate.getDay()} and the time `
 

                        //important method for type of format 
console.log(newDate.toLocaleString('default', {
    weekday:"long"
}))

