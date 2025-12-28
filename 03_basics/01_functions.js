// console.group("s");
// console.group("h");
// console.group("i");
// console.group("v");
// console.group("a");
// console.group("n");
// console.group("i");

// function sayMyName(){
//     console.log("shivani");


// }
// sayMyName();

function addTwoNumber(number1 , number2){
    return number1 + number2;
}
addTwoNumber(5, 10);
// console.log(addTwoNumber(5, 10));

function addTwoNumber(number1 , number2){
      let result = number1 + number2;
        return result;
}
const result = addTwoNumber(5, 15);
// console.log("Result is :", result);

function loginUsermessage(username){
    if(!username){
        return "Please enter a valid username"
    }
    return `${username} just logged in` 
}
// console.log(loginUsermessage("shivani"));

function calculateCartPrice( val1,val2, ...num1){//... is rest operator
    return num1;
}
// console.log(calculateCartPrice(100 , 50 , 67));

const user = {
    username : "shivani",
    price : 500,
}
function handleObject(anyobject){
    console.log(`Uesername is : ${anyobject.username} and price is : ${anyobject.price}`);
}
// handleObject(user);


handleObject({
    username : "rahul",
    price : 700,
})

const myNewArray = [1,2,3,4,5,6,7,8,9];

function returnSecondvaalue(getArray){
    return getArray[1];
}
console.log(returnSecondvaalue(myNewArray));

