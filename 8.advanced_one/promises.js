//promises
//A Promise is in one of these states: -->

//pending: initial state, neither fulfilled nor rejected. -->
// <!-- fulfilled: meaning that the operation was completed successfully. -->
// <!-- rejected: meaning that the operation failed. -->
// <!-- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//creation of promises(type 1)
const promiseone = new Promise(function (resolve, reject) {
  //any async task
  //DB task, cryptography task
  setTimeout(function () {
    console.log("task is complete");
    resolve();
  }, 1000);
});
//consuption of the created promise
//to connect then with resolve we use the resolve() method in async function

promiseone.then(function () {
  //thid function takes default parameters sent by promise
  console.log("promise consumed");
});

//(type 2)
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2 consumed");
});

//type3(to pass data)
const promisethree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const data = { username: "kai", email: "kai@beyblade.com" };
    resolve(data);
    //often we pass object, but we can pass arrays etc. also
  }, 1000);
});
promisethree.then(function (user) {
  console.log(user);
});

//type 4(use reject for error)
//.catch to see error
//chaining(very important for database linking during backend)
//.finally
const promisefour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const data = { username: "kai", email: "kai@beyblade.com" };

    let error = true;
    if (!error) {
      resolve(data);
    } else {
      reject("error: occured");
    }
  }, 1000);
});
promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("something happended but promise consumed"));

//type5(async await method to consume promise)

const promisefive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const data = { username: "JS", password:"1234" };

    let error = true;
    if (!error) {
      resolve(data);
    } else {
      reject("error: js error occured");
    }
  }, 1000);
});

async function promiseconsume(){  
  try {//if resolved then this runs
    const response=await promisefive
    console.log(response);
  } catch (error) {
    //if rejected then this runs
    console.log(error);
  }
}
promiseconsume()
//.then and .catch donot require await function as next rens after completion of previous


//type 6
//introduction to fetch
//fetch is a shorter method to access asynchronous function
// *******it returns a promise********

//async_await method to handle  fetch

// async function getuserdata(){
//   try {
//     let response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getuserdata();





//.then,.catch method to handle fetch

const resolve= fetch('https://jsonplaceholder.typicode.com/users');
resolve.then((userdata)=>{
  return userdata.json();
}).then((jsondata)=>{
  console.log(jsondata);
}).catch((error)=>console.log(error))




