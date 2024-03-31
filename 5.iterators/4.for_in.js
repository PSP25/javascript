//for in
//it works on objects unlike for_of
// it gives the index rather than the value at index i

//1.objects
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//    console.log(key)     //prints the indexes  
}
for(const i in myObject){
    // console.log(i,":-",myObject[i]) //way to print key and value
}


//2.array
const arr=["shaktiman","bhim","gojo"]
for (const i in arr) {
    // console.log(i);//prints the key of array i.e indexes
    // console.log(arr[i]);//prints value at i
}

//4.strings
const str="hello world"
for (const key in str) {
    // console.log(key);//prints the indexes
    console.log(str[key]);//prints the values
}

//3.maps(non iterable in for_in)
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const i in map) {
    // console.log(i);//function executed but nothing printed like for_of
}
for (const i in map) {
    console.log(map[i]);//function still executed but prints nothing as 
}

