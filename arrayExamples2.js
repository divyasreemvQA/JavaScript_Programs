let numbers=[10,70,30,20,50];
console.log("First element:",numbers[0]);
console.log("Last element:",numbers[numbers.length-1]);

//change value in any position
let marks=[32,7,21,88,11];
marks[1]=44;
console.log(marks);

//for in loop - to find index value of any item in array
let fruits =["Apple", "Mango","Kiwi"];
for(let index in fruits){
    console.log(index); 
}

//display index and value
let students=["Anne","Ria","Mal"];
for(let index in students){
    console.log(index,students[index]);
}


//total of values in array
let marks1=[1,35,76,43];
let total=0;
for(index in marks1){
    total = total + marks1[index]
}
console.log(total);


//for of loop- to find value in array
let fruits1=["Mango", "Apple", "Kiwi"];
for(let fruit of fruits1){
    console.log(fruit);

}


let numbers1=[3,4,54,11,64,31,59];
for(let value of numbers1){
        if(value%2===0){
        console.log(value);
    }
        else{
        console.log(value);
    }
}

