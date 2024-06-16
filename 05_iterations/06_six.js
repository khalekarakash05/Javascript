// const arr = ['js', 'ruby', 'cpp', 'python', 'java', 'swift' ];


// const coding = arr.forEach((item)=> {
//     console.log(item)
//     return item;
// })

// console.log(coding)

//as foreach loop not return anything 


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num)=> {
//     return num > 5;
// });

//by using foreach loop 
const newNums = [];
myNums.forEach((num)=>{
    if(num > 5){
        newNums.push(num);
    }
})

// console.log(newNums)


const books = [
    {
        title: "Book one", 
        genre: "Fiction",
        publish: 1981,
        edition: 2004
    },
    {
        title: "Book two", 
        genre: "Non Fiction",
        publish: 1992,
        edition: 2008
    },
    {
        title: "Book three", 
        genre: "History",
        publish: 1999,
        edition: 2007
    },
    {
        title: "Book four", 
        genre: "Non Fiction",
        publish: 1989,
        edition: 2010
    },
    {
        title: "Book five", 
        genre: "Science",
        publish: 2009,
        edition: 2014
    },
    {
        title: "Book six", 
        genre: "Fiction",
        publish: 1987,
        edition: 2010
    },
    {
        title: "Book seven", 
        genre: "History",
        publish: 1986,
        edition: 1996
    },
    {
        title: "Book eight", 
        genre: "science",
        publish: 2011,
        edition: 2016
    },
    {
        title: "Book Nine", 
        genre: "Fiction",
        publish: 1981,
        edition: 1989
    },
]


let userBooks = books.filter((bk) => {
    return bk.genre === "History"
})

userBooks = books.filter((bk) => {
    return bk.publish >= 2000
})

console.log(userBooks)