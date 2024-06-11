// let a = 10;
// const b = 20;
// var c = 30;
// var c = 300;

let a = 100; 

if(true){
    let a = 10;
    const b = 20;
    console.log("a inside block: ", a);//10
    // var c = 30;//this will change the value of c
}

// console.log(a);//as let is block scoped it will give error
// console.log(b);//as const is block scoped it will give error
// console.log(c);//as var is function scoped it will not give error

console.log("a outside block: ", a);//100




function one(){

    const username = "Akash";

    function two(){
        const website = "www.google.com";
        console.log(username);
    }

    // console.log(website);//this will give error as website is not defined in this scope

    two();
}
one();
// two();//this will give error as two is not defined in this scope




//if else block scope

if(true){
    const username = "sanchit";

    if(true){
        const website = "www.google.com";
        console.log(username + " " + website);
    }
    // console.log(website);//this will give error as website is not defined in this scope

}
// console.log(username);//this will give error as username is not defined in this scope

function addTwo(num){//this is called function declaration
    return num + 2;
}
addTwo(4);


const addtwo = function(num){//this is called function expression
    return num + 2;
}
addTwo(5);