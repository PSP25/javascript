//reduce
//similar to map,filter
//it has two parameters accumulator,currentvalue

//syntax:  const a= nums.reduce( ()=>() ,intial_value of accumulator)

const myNums = [1, 2, 3]

const accnums=myNums.reduce((acc,currval)=>{
    // console.log(acc,currval)
    return acc+currval
},0)
// console.log(accnums)

//shortening the above code
const acnum2=myNums.reduce((acc,curr)=>(acc+curr),0)
// console.log(acnum2)


//practicing reduce
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//find the total price of all the courses in the cart

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);