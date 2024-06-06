let myDate = new Date();
// console.log(myDate.getFullYear());
// console.log(myDate.toDateString())
// console.log(myDate.toString());
// console.log(myDate.toLocaleString())


let myCreatedDate = new Date(2025, 0, 2);
let myCreatedDate2 = new Date(2024, 0, 2, 5, 3);
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

const mycreationDate = new Date("1-2-2024")
// console.log(mycreationDate.toDateString())

let myTime = new Date();
// console.log(myTime.getTime())
// console.log(mycreationDate.getTime())

// console.log(Math.round(Date.now()/1000))//seconds

const newDate  = new Date();
newDate.toLocaleString('default',{
    weekday: "long",
    minute: "2-digit",
    month: "numeric",
    year: "numeric",
    second: "2-digit",
    era: "long",
    
})
console.log(newDate.toLocaleString('default',{
    weekday: "long",
    minute: "2-digit",
    month: "numeric",
    year: "numeric",
    second: "2-digit",
    era: "long"
    
}))