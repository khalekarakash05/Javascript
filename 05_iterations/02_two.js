//while loop

let index = 0;//initialization
while (index <= 10) {//()=> condition to stop the loop
    console.log(`Value of index is ${index}`);
    index += 2;//increment
}

let myArray = ["flash", "batman", "superman"];

let arr = 0;
while(arr < myArray.length){ 
    console.log(`value of my array is ${myArray[arr]}`);
    arr++; 
}


//do while loop
let score = 1;
do {
    console.log(`score is ${score}`);
    score++;
} while (score <10 );