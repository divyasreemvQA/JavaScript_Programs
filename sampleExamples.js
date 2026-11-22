//falsy values -> false, 0 (zero), -0(neg zero), big0 (bigint zero), "", null, undefined, nan(not a number)
//truthy values -> true, 1, -1, "Hello", "0", "false", " ", [], {}, function(){} 

let value =0;
if(value){
    console.log("Truthy value");
}
else{
    console.log("Falsy value");
}



let name = "";
if(name){
    console.log("Name is available");
}
else{
    console.log("Name is empty");
}



let fruits=[];
if(fruits){
    console.log("Array is truthy");
}
else{
    console.log("Array is falsy");
}



let student={};
if(student){
    console.log("Object is truthy");
}
else{
    console.log("Object is falsy");
}



let a=null;
let b;
if(a){
    console.log("a is truthy");
}
else{
    console.log("a is falsy");
}
if(b){
    console.log("b is truthy");
}
else{
    console.log("b is falsy")
}


//to check is a value ir=s truthy or falsy
console.log(Boolean(10));
console.log(Boolean(0));
console.log(Boolean(null));


let userName="";
if(userName){
    console.log("Login Successfull");
}
else{
    console.log("Please enter User Name");
}