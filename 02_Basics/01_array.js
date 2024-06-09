const arr = [1,2,3,4,5];
const myheros = ["shaktiman", "nagraj"];

const myArr = new Array(2,3,4,5,6);

console.log(myheros);
console.log(myArr[0])

myArr.push(8);
console.log(myArr)

myArr.pop();
console.log(myArr);

myArr.unshift(88);
console.log(myArr);

myArr.shift();
console.log(myArr);

console.log(myArr.includes(3));

const newArray = myArr.join();
console.log(newArray);

console.log(typeof newArray);

const myn1 = myArr.slice(1,3);
console.log("A", myArr);
console.log(myn1);


const myn2 = myArr.splice(1,3);
console.log("B", myArr);
console.log(myn2);