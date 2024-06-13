//for of loop

// ["", "" ,""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
    // console.log(val);
}

const greeting = "Hello World !!!";

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`)
}


//Maps
const map = new Map();
// console.log(typeof map)// type of map is object

map.set("IN", "INDIA");
map.set("USA", "UNITED STATES OF AMERICA");
map.set("FR", "FRANCE");

// console.log(map);//it is storing values as a key value pair
//also it is storing the unique values of the respective key
//it removes duplicates it stores only unique value of that key
// Map(3) {
//     'IN' => 'INDIA',
//     'USA' => 'UNITED STATES OF AMERICA',
//     'FR' => 'FRANCE'
//   }


for (const key of map) {
    // console.log(key)
}

// [ 'IN', 'INDIA' ]
// [ 'USA', 'UNITED STATES OF AMERICA' ]
// [ 'FR', 'FRANCE' ]

for(const [key, val] of map){
    // console.log(key ,":- ", val);
}
// IN :-  INDIA
// USA :-  UNITED STATES OF AMERICA
// FR :-  FRANCE


const myObject = {
    "game1": "NFS",
    "game2" : "Spiderman"
}

// for (const [key, val] of myObject) {
//     console.log(key , " :- ", val);
// }/
//for of loop will not work on the for of loop 
//because objects are not iterable