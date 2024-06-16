const myNums  = [1, 2, 3];

// const myTotal = myNums.reduce(function(acc, currVal){
//     console.log(`acc: ${acc} and current val is ${currVal}`);
//     return acc + currVal;
// }, 0)//accumulator ko 0 se initialize kiya hai


//reduce using arrow function
const myTotal = myNums.reduce((acc, currVal)=> {    
    console.log(`acc: ${acc} and current val is ${currVal}`);
    return acc + currVal;
}, 0)//accumulator ko 0 se initialize kiya hai


// console.log(myTotal)

const shoppingCart = [
    {
        item: "Javascript",
        price: 2999,
    },
    {
        item: "Java",
        price: 1999,
    },
    {
        item: "Python",
        price: 999,
    },
    {
        item: "Ruby",
        price: 599,
    }
]


const total = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
}, 0)

console.log(total)