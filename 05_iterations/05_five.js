//for each loop

const coding = ["js", "ruby", "cpp", "python", "java", "swift"];

// coding.forEach( function (item) {
//     console.log(item)
// } )

//using the arrow function
// coding.forEach((items)=> {
//     console.log(items)
// })

// function name(item){
//     console.log(item);
// }

// coding.forEach(name);//directly give name function as callback

 
coding.forEach((item, index, arr)=>{
    console.log(item, index, arr)
})