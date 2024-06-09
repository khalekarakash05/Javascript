//singleton

// const obj = Object.create()// this is constructor method singleton is created in this type

 
//object literals

const mySymbol = Symbol("key");

const jsUser = {
    name : "Akash",
    [mySymbol]: "mykey1",
    age: 21,
    location: "Pune",
    email: "akashkhalekar@gmail.com" ,
    isLoggedIn: false,
    lastLoggedIn : ["Monday", "Saturday"],
}

//accessing the object properties
console.log(jsUser.email);
//dot method se bhi access kar sakate hai
console.log(jsUser["email"]);
//object ki properties ko square bracket laga ke quotes se bhi access kar sakte hai
console.log(jsUser[mySymbol])
//symbol ko agar access karna ho tho use square bracket se hi access karna padata hai


//change the values of that object
jsUser.email= "sanchit@gmail.com";

console.log(jsUser.email);


//freeze the object so that it's properties can't be changed
// Object.freeze(jsUser);

// jsUser.name = "sjgfdskj";
console.log(jsUser.name);//see here it is unable to  change the name of that object

console.log(jsUser); 


jsUser.greeting = function(){
    console.log("hello js user")
}

jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`)
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());