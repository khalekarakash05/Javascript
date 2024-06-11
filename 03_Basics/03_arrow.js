//this keyword
//this keyword is a current context => refers to the object that is executing the current function

const user = {
    username: "Akash",
    prices: "999",
    loggedIn: function(){
        console.log(`${this.username} just logged in`)
        //let's what is this keyword
        console.log(this)//it is showing the current context
    }
}
user.loggedIn();
user.username = "Sanchit"; 
user.loggedIn();



console.log(this);//this will show the global context


function chai(){
    const username = "Akash";
    console.log(this.username);
    // console.log(this)
}
chai();//this will show undefined as this is not defined in this context


// arrow function
// const arrowFunction = () => {
//     const username = "Akash";
//     console.log(username);
//     console.log(this);//this will show the global context
// }
// arrowFunction(); 


// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2;

// }
// console.log(addTwoNumbers(3, 4));

//another way to write arrow function
const addTwoNumbers = (num1, num2) => num1 + num2;//implicit return for 1 line statement
console.log(addTwoNumbers(3, 4));


//if you want to create an object with arrow function
const arrowObject = () => ({
    username: "Akash",
} 
)
console.log(arrowObject());


const myArray = [2, 3, 5, 6,7];
myArray.forEach((num) => {
    console.log(num);
})