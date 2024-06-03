//primitive data types

//7 types : string , number, boolean, null, undefined, symbol, BigInt

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId)

const BigNumber = 12343543625423532453246n;
// console.log(typeof(BigNumber))

//reference (Non Primitive)

//Array, Objects, Functions

//Array
const arr = ["nagraj", "doga", "shaktiman"];

//objects
let obj = {
     name: "Akash",
    age: 22,
    field: null
}

//function
const myFunction = function(){
    console.log("Hello world");
}
 
// myFunction();

//interview related questions
// console.log(typeof null);
// console.log(typeof undefined);



// ????????????????????????????????????????????????????????????????????????????????????

//stack memory and heap memory 
//all the primitive data types used are included in stack memory 
//all the non primitive data types used are included in heap memory

//stack memory gives copy of variables 
//whereas in heap memory we get the reference 

//for example

let myName = "Akash";
let anotherName = myName;

//here if we change value of another name then we will see that my name value remains same 
//because it give only copy it will not by reference
anotherName = "Sanchit"

console.log(anotherName);
console.log(myName);


//lets see the example of heap memory
let userOne = {
    email: "akash@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne;

userTwo.email = "ritesh@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);