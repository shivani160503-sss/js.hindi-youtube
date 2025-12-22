// Primitive Data Types

// 7 types : Strings , Numbers, BigInt, Boolean, Undefined, Null, Symbol

// const score = 100 ;
// const scoreVAlue = 100.3;

// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail; // undefined

// const id = Symbol('12345');
// const anotherId = Symbol('12345');

//  console.log(id === anotherId); // false

// const bigNumber = 1234567890123456789012345678901234567890n;
// console.log( bigNumber); // bigint



// Reference Data Types (non-primitive data types)

// Object , Array , Functions



// const heros = ["Shivani" , "Ankita" , "Pooja" , "Neha"];

// let myObej = {
//     name : "Shivani",
//     age : 24, 
// }

// function myFunction(){
//     console.log("Hello User");
// }

// myFunction();


//+++++++++++++++++++++++++++++++++

// Stack ( Primitive data types )  vs Heap ( Reference data types )

let myYoutubeChannel = "CodeWithShivani";
let anotherChannel = myYoutubeChannel;
anotherChannel = "CodeWithShivi";

console.log({myYoutubeChannel , anotherChannel});


let userOne = {
    email : "shivani@gmail.com",
}
let userTwo = userOne;
userTwo.email = "shivi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);