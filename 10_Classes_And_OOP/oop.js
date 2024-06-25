const user = {
    username: "Akash",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got  user details from database");
        // console.log(`Got the user ${this.username}`)
        console.log(this)
        // -> 
        // {
        //     username: 'Akash',
        //     loginCount: 8,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)



// const promiseOne = new Promise() 
// const date = new Date();//new => constructor function 


function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount
    this.signedIn = signedIn;

    // return this;//=> it is return bydefault
}

const userOne = new User("akash", 9, false);
const userTwo = new User("Khalekar", 3, true);
//because of new keyword values are not overriden
console.log(userTwo)
console.log(userOne)