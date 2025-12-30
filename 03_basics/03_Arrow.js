const user = {
    name: 'Alice',
    price :333,

    welcomeMessage: function() {
        console.log(` ${this.name} , Welcome to website `);
        console.log(this);
   }
}
// user.welcomeMessage();
// user.name = "Bob";
// user.welcomeMessage();



// function chai(){
//     let username = "Chai";
//     console.log(this.username);
// }
// chai()


//  const chai = function (){
//     let username = "Chai";
//     console.log(this.username);
// }
// chai()

    const chai = () => {
    let username = "Chai";
    console.log(this.username);
}
// chai()


//explicit return
// arrow function
// if we can add curly brace then we and return keyword is must
const addtwo = (num1 , num2) => {
    return num1 + num2;
}
// console.log(addtwo(5,10));

// implicit return
// also we can write withhout return keyword if we have single line code and without curly braces
const addthree = (num1,num2,num3) => (num1 + num2 + num3);
console.log(addthree(5,10,7));