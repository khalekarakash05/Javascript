const userEmail = "akash@gmail.com";

if(userEmail){
    console.log("got the user email");
}
else{
    console.log("Don't have the user email")
}

//falsy value

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN(not a number)

// truthy value

// true, 1, "0", "false", " ", [], {}, function(){}, 


// nullish coalescing operator (??) : null undefined
 let val; 
//  val = 5 ?? 10;
// val = null ?? 10;
// val = undefined ?? 15;
val = null ?? 10 ?? 15;//it is considering first value of it

console.log(val);

//ternary operator

// condition ? true : false;

// ex
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80")

