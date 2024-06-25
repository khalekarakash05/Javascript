const promiseOne = new Promise(function (resolve, reject) {
    //Do any async tasks here
    //DB calls, cryptography
    setTimeout(() => {
        console.log("Async task is completed");
        resolve();
    }, 2000);
});

promiseOne.then(() => {
    console.log("Promise is consumed")
})


new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Async task 2 is completed");
        resolve();
    }, 3000);
}).then(()=>{
    console.log("Promise part 2 is consumed")
})



console.log(typeof promiseOne)


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({username: "Akash", email: "akashkhalekar@gmail.com"})
    }, 1000);
})

promiseThree.then((user)=>{
    console.log(user)
})

const promiseFour = new Promise((resolve, reject)=> {
   setTimeout(() => {
    let error = false;
    if(!error){
        resolve({username: "Akash ", email: "akashkhale@gmail.com"})
    }
    else{
        reject("Error")
    }
   }, 5000);
})

promiseFour.then((user)=> {
    console.log(user)
    return user.username
}).then((username)=> {
    console.log(username)
}).catch((err) => {
    console.log(err)
}).finally(()=> {
    console.log("The promise is either resolve or rejected finally block is always excuted")
})




//another way to write promise using async await

const promiseFive = new Promise((resolve, reject)=> {
    setTimeout(() => {
     let error = false;
     if(!error){
         resolve({username: "Akash ", email: "akashkhale@gmail.com"})
     }
     else{
         reject("Error")
     }
    }, 5000);
 })


try{
    async function consumePromiseFive(){
    const response = await promiseFive;
    console.log(response);
    }

    consumePromiseFive();

}catch(err){
    console.log(err);
}



//fetch data using api in async await
// async function getAllUser(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error) ;
//     }
// } 
// getAllUser();



//another method
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> {
    return response.json();
}).then((data)=> {
    console.log(data);
}).catch((err)=>{
    console.log(err)
})