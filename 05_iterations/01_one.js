//for loop

// for (let i= 0; i< 10; i++) {
//     const element = i
//     if(i == 5){
//         console.log("5 is a best number");
//     }
//     console.log(element);
    
// }
// console.log(element);//it is not accessible out of scope as it is defined inside the for loop block



// //
// for(let i = 0; i<10; i++){
//     console.log(`outer number value is ${i}`)
//     for(let j = 0; j<10; j++){
//         console.log(`inner loop value is ${j} and outer number value is ${i}`)
//     }
// }


for (let index = 0; index <= 20; index++) {
    
    if(index === 5){
        console.log(`detected element is 5`);
        // break;
        continue;
    }
    console.log(`value of i is ${index}`)
    
}