//for each, map, filter

//for each - does a task on each value of an array
let students=["Sam", "Jay", "Will"];
students.forEach(function(name){
    console.log(name);
})

//map- does a task on each value in  a array and creates a new array with modified values
//1
let  numbers=[34,6,1,6,5,2]
let result = numbers.map(function(num){
    return num*2;
})

console.log(result);
console.log(numbers);

//2
let names=["Sam", "Divya", "Anne"];
let upper = names.map(function(name){
    return name.toUpperCase();
})
console.log(upper);


//filter --> 
//1
let number1=[4,6,1,12,78,34];
let higher= number1.filter(function(num){
    return num>15;
})
console.log(higher);

//2
let numbers2=[5,20,25,30,35];
let even = numbers2.filter(function(digit){
    return digit%2===0;
})
console.log(even);


