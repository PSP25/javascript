// practice string
// use console to get all possible functions of strings
// do it by dynamic declaration of string using new keyword

let x="hello kai hiwatari";
let y=new String("hello kai hiwatari");

//imp way of representation  templete string ( ` ` )
let New="string";
let way="interpolation";

console.log(`it is called ${New} ${way}.`);

//important functions

                                                    //set1
                            
console.log(x.length);

console.log(x.at(4));

console.log(x.charAt(0));

console.log(x.charCodeAt(6));

console.log(x[0]);

console.log(x.replace("hello","Hi")); //only replaces the first occurance
console.log(x.replaceAll("l","m"));


console.log(x.indexOf("lo")); //also have .lastindexOf()

console.log(x.slice());  //can give zero/one/two parameters () / (start) / (start,end)

console.log(x.substring(3,7)); //can give zero/one/two parameters () / (start) / (start,end)

console.log(x.substr(4)); // can give one or two parameters  (start) / (start,length)

console.log(x.toUpperCase());
console.log(x.toLocaleLowerCase());

let a="   extra space    "; //other varieties  s.trimStart()
console.log(a.trim());      //                 s.trimEnd()

                                                //set2

console.log(x.padStart(5,"a")); //can give one or two parameter
console.log(x.padEnd(2,"_"));

console.log(x.repeat(4));

let m="helLO"
console.log(m.replace(/lo/i,"mo"));///case insensitive replace search

console.log(x.search("lo"));

let text = "The rain in SPAIN stays mainly in the plain";

console.log(text.match("ain"));     //only the  first occurance
                                //gives obj with all occurance of the string
console.log(text.matchAll("ain")); 
console.log(text.match(/ain/g)); 
console.log(text.match(/ain/gi)); 

console.log(x.startsWith("hel"));
console.log(x.endsWith("ri"));
console.log(x.includes("hell"));//two possible parameters i.e (string)/ (string, start_point_of search)
console.log(x.includes("hell",5));


































