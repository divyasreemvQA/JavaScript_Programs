/*
//global declaration
let name = "Anne";
function displayName(){
    console.log("Inside Fn",name);
}
displayName();
console.log("Outside Fn",name);
*/

/*
//function scope
function showDetails(){
    let name = "Mat";
    let age = 30;
    console.log(name, age);
   // console.log(age);
}
showDetails();
console.log(name,age);          //not accessible outsdie function
*/

//block scope
if(true){
    let age = 25;
    const name ="Dane";
    var city = "Kochi";
    console.log(age, name, city);
}
console.log(age);               //not accessible outside block


