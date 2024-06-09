function sayMyName(){
    console.log("A")
    console.log("K")
    console.log("A")
    console.log("S")
    console.log("H")
}

// sayMyName();

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    return num1 + num2; 
}

const result = addTwoNumbers(3,4)

// console.log("result: ", result);


function loggedIn(username){
    return `${username} just logged in`
}

// console.log(loggedIn("Akash "))


// function calculateCartPrice(...num){//... is a rest operator
//     return num;
// }

// const price = calculateCartPrice(100, 200, 400, 300);
// console.log(price);



function calculateCartPrice(val1, val2, ...num){//... is a rest operator
    return num;
}

const price = calculateCartPrice(100, 200, 400, 300);
console.log(price);//here val1 and val2 take first two arguments
//  and remaining all goes to the num through that rest operator


const user = {
    username : "Akash",
    prices: "999",
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`)
}

// handleObject(user);
handleObject({
    username: "Akash",
    prices: "399"
})


const myArray = [200, 400, 300, 100];

function returnSecondValue(getArray){
    return getArray[1];
}

const response = returnSecondValue(myArray);
// console.log(response);
console.log(returnSecondValue([200, 500, 300, 100]))