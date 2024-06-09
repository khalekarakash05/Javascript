
const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);//it is pushing dc_heros array as a array in marvel_heros array

// console.log(marvel_heros[3][1]);
//it will accessing 3 rd index array in that 1st indexed value of inner array

//another proper way to merge this two array is given below
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);



//another way to concatenation of arrays is 
const all_new_heros = [... marvel_heros, ... dc_heros];
console.log(all_new_heros);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realArray = anotherArray.flat(Infinity)//here infinity is a depth of the array 
//here is 3 we can give infinity so that it can automatically understacnd himself
console.log(realArray);


console.log(Array.isArray("Akash"));
console.log(Array.from("Akash"));//it will create it as array
console.log(Array.from({name: "Akash"}));

//creating array of variable
let array1 = 100;
let array2 = 200;
let array3 = 300;
let array4 = 400;

console.log(Array.of(array1, array2, array3, array4));
