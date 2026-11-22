// push method to add an element to the end of array
let fruits=["Apple", "Kiwi", "Banana"];
fruits.push("Avocado");
console.log(fruits);

//pop method to remove last element of array
let fruits1=["Mango", "Orange", "Avocado","Banana"];
fruits1.pop();
console.log(fruits1);

//unshift to add an element to the start of array
let fruits2=["Apple", "Kiwi", "Banana"];
fruits2.unshift("Orange");
console.log(fruits2);


//shift to remove an element at the start of array
let fruits3=["Mango", "Kiwi", "Banana"];
fruits3.shift();
console.log(fruits3);

// splice to update element in a specific index
let fruits4=["Mango", "Kiwi", "Banana"];
fruits4.splice(1,1);
console.log(fruits4);

// slice to remove element from a specific index
let fruits5=["Apple", "Mango", "Banana", "Kiwi", "Avo"];
let result=fruits5.slice(1,3);
console.log(result);
console.log(fruits5);

//indexOf  to find the index of an element
let fruits6=["Apple", "Mango", "Banana", "Kiwi", "Avo"];
console.log(fruits6.indexOf("Kiwi"));
console.log(fruits6.indexOf("Peas"));

//lastIndexOf - to check last index of a repeating number
let numbers = [10,20,30,40,20];
console.log(numbers.lastIndexOf(20));

//includes - to check if an element is available
let fruits7=["Apple", "Mango", "Banana", "Kiwi", "Avo"];
console.log(fruits7.includes("Mango"));
console.log(fruits7.includes("Peas"));


//sort ascending
let numbers1 = [10,20,30,40,20];
numbers1.sort((a,b)=>a-b);
console.log(numbers1);

//sort descending
let numbers2 = [10,20,30,40,20];
numbers2.sort((a,b)=>b-a);
console.log(numbers2);

//reverse elements
let fruits8=["Apple", "Mango", "Banana", "Kiwi", "Avo"];
fruits8.reverse();
console.log(fruits8);
