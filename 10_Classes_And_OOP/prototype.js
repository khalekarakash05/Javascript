// let myName = "akash     ";
// let chai = "chai         ";        

// console.log(myName.trueLength)



let myHeros = ["Captain America", "spiderman", "ironman", "thor", "hulk", "black widow", "hawkeye"];

let heroPower = {
    thor: "Thunder",
    ironman: "Money",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.ironman}`)
    }
}

Object.prototype.akash = function(){
    console.log(`Akash is present in all objects`)
}

Array.prototype.heyAkash = function(){
    console.log(`Hey Akash is present in all arrays`)
}

// heroPower.akash(); 
myHeros.akash();
myHeros.heyAkash();
// heroPower.heyAkash();



//inheritance

const user = {
    name: "Akash",
    email: "akashkhalekar@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user;

console.log(teacher.makeVideo)

//morder syntax
Object.setPrototypeOf(teachingSupport, teacher);


let anotherUserName = "Akash       ";


String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}

anotherUserName.trueLength()