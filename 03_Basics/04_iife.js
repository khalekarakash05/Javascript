

//immediately invoked function expression
DB_url = "mongodb://localhost:27017";

(function db(){
    console.log(`Database is connected to ${DB_url}`);
})();//here function is immediately invoked after its declaration


( () => {
    //this is unnamed iffe function
    console.log(`Database is under arrow function connected to ${DB_url}`);
})();//here function is immediately invoked after its declaration


( function chaiAurCode() {
    //it is called named iife function -> as it has name chaiAurCode 
    console.log("Hello");
})();//here in iife we should give semi colon at the end of the function
//otherwise it will give error