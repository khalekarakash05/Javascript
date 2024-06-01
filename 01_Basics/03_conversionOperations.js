let score = "33abc";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);


//conversions
//"33" => 33;
//"33abc" => NAN => not a number
//true => 1;
//false => 0;


let isLoggedIn = "akash";

let valueInBoolean = Boolean(isLoggedIn);
console.log(valueInBoolean);

//conversions in boolean
//1 => true
//0 => false
//"Akash" => true;


let sum = 33;

let valueInString = String(sum);
console.log(typeof valueInString);

//33 => "33" => number converted to string