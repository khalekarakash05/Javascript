// if

// const userLoggedIn = true;
// if(userLoggedIn){

// }

// <, >, <=, >=, == , != , ===, !==

// if(2 === "2"){
//     console.log("executed")
// }

// const temp = 41;
// if(temp < 50){
//     console.log("temp is less than 50")
// }
// else{
//     console.log("temp is greater than 50")
// }

// implicit scope 
// const balence = 1000;
// if(balence > 500) console.log("test")

// const balence = 1000;


//nested statements
// if(balence < 500){
//     console.log("less than 500");
// }
// else if(balence < 750){
//     console.log("less than 750");
// }
// else if(balence < 900){
//     console.log("less than 900");
// }
// else if(balence < 1200){
//     console.log("less than 1200");
// }



const userLoggedIn = true;
const debitCard = true;

// if(userLoggedIn && debitCard){//both conditions should satisfy then only allow to enter into this if block
//     console.log("Allow user to buy course");
// }
// else{
//     console.log("not allow to buy the course");
// }

const loggedInFromEmail = true;
const loggedInFromGoogle = false;

if(loggedInFromEmail || loggedInFromGoogle){//one of them condition should satisfy to enter into this if block
    console.log("user is logged in successfully"); 
}

