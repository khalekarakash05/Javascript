const name= "Akash Khalekar";
const repoCount = 14;

// console.log(name + repoCount);
//above method is traditional method insead that 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
//above is modern way to console it using backticks
//it is known as string interpolation

//another method of string
const namee = new String("akash_Khalekar");
// console.log(namee);
//lets access its key value based on indexes
// console.log(namee[0])

// console.log(namee.__proto__);

// console.log(namee.length);

// console.log(namee.toUpperCase());

// console.log(namee.charAt(6));

// console.log(namee.indexOf('h'));

const newString = namee.substring(0,5);
console.log(newString);

const anotherString = namee.slice(0,5);
console.log(anotherString);

//trim
const pass = "       akash         ";
console.log(pass.trim());//remove all the spaces

//replace 
const url =  "https://akash.com/akash%20khalekar";

console.log(url.replace('%20', '-'));


console.log(url.includes("akash"))


//split
const ak = "akash-khalekar-king";
console.log(ak.split('- '))
