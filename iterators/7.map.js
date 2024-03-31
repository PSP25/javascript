const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//.map is also a similar method
//it also takes callback function
//it helps in both conditional check like filters and in operations

// const newNums = myNumers.map( (num) => { return num + 10})//can be done without curly braces
// console.log(newNums);


//chaining fo methods
//it works in first to last way
//the results of first is sent to second as input
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);