//storing in variables

const coding = ["js", "ruby", "java", "python", "cpp"]

//for each cannot return any value, it can only perform operations onn them
// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )
// console.log(values);


//how to return values(filter)
//it also takes callback function
//it works as a conditional checker function
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => num > 4)
//you can declare it as single line without return statement as above
console.log(newNums);

 const newNums2 = []

 //alternate method to do the same thing usinf for_each
myNums.forEach( (num) => {
    if (num > 4) {
        newNums2.push(num)
    }
} )
console.log(newNums2);


//use of filters

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBooks = books.filter( (bk) => bk.genre === 'History')//without return statement

userBooks = books.filter( (bk) => { //with return statement
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);