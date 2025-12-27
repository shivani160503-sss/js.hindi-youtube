//const tinderUser = new Object(); // "object constructor" syntax 
const tinderUser = {}; // "object literal" syntax

tinderUser.name = "Shivani";
tinderUser.age = 21;
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email : "shibani@gmail.com",
    fullname : {
        userFullname : "Shivani",
        userLastName : "Patel",
    }
};
// console.log(regularUser);



const obj1 = {1 :"a", 2 : "b" , 3 : "c"};
const obj2 = {4 :"d", 5 : "e" , 6 : "f"};

const obj3 = Object.assign({}, obj1, obj2); // merging  objects using Object.assign method
// // const obj3 = {obj1, obj2}; // merging objects using spread operator
// console.log(obj3);
// console.log(...obj1, ...obj2); // merging objects using spread operator


const users = [
    {
        id : 101,
        email : "shivi@gmail.com"
    },
   {
        id : 101,
        email : "shivi@gmail.com"
    },
    {
        id : 101,
        email : "shivi@gmail.com"
    }
]




users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // to get all keys of an object
console.log(Object.values(tinderUser)); // to get all values of an object
console.log(Object.entries(tinderUser)); // to get all entries of an object as array of arrays