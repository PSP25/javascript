//for_each
//takes callback functions
const coding = ["js", "ruby", "java", "python", "cpp"];
// way1(general fub=ntion)
coding.forEach(function (val){
    // console.log(val);
})
// way2(arrow function)
coding.forEach((item)=>{
    // console.log(item);
});

//calling function inside a for each

function printme(item){
    // console.log(`hello ${item}`)
}

coding.forEach(printme);//always pass the reference of the function not the call of function


//for each can take three parameters value,index,array

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

//array of objects

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item);//prints each obj as an array
    console.log(item.languageName)//prints languagename of each object
})