//  const tinderUser = new Object();//singlton  method

const tinderUser = {

}

tinderUser.id= "1234skjfsj";
tinderUser.name = "Kajal";
tinderUser.age = 24;

console.log(tinderUser);

const regular_user = {
    email: "some@gmail.com",
    fullName: {
        userFullName : {
            firstName: "akash",
            lastName: "khalekar"
        }
    }
}

console.log(regular_user )


const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "c", 6: "d"};

console.log({obj1,obj2})//it is adding two obj as a obj after combining

//so combining two objects method
const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);//here {} it act as a source and obj1, obj2 , obj3 are act as destination

//spread operator
const obj5 = {...obj1, ...obj2, ...obj3};
console.log(obj5);


const users = [
    {
        id: "sj",
        email: "akash@gmail.com",
    },
    {
        id: "413",
        email: "sanchit@gmail.com"
    }
]

console.log(users[0].email);


console.log(tinderUser);
console.log(Object.keys(tinderUser));// it is converting keys of tinderobject as array
//{ id: '1234skjfsj', name: 'Kajal', age: 24 }
// [ 'id', 'name', 'age' ]

console.log(Object.values(tinderUser));//it is convetting values of tinderobject as a array
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty("name"));//true  => it is showing wheather this propery present in that object or nto


const course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructor: "Akash"
}

// course.courseInstructor

// const {courseInstructor} = course;
// console.log(courseInstructor); 
const {courseInstructor: instructor} = course;
console.log(instructor); 