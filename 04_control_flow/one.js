// if
// let i = 5;
// if( i <= 10){
//     console.log("i is less than 10");
// }else{
//     console.log("i is greater than or equal to 10");
// }
// if (false){

// }


/// <,> <=, >=, ==, ===, !=, !== ///


// const temprature = 41;
//  if(temprature === 41){
//     console.log("It is hot day");
//  }else{
//     console.log("It is not hot day");
//  }

const score = 200
if(score>100){
    const power = "Gold";
    // console.log(`User Power : ${power}`);
}
// console.log(`User Power : ${power}`); //error: power is not defined


const balance = 1000;
// if(balance > 500) console.log("test1") , console.log("test2");
////this is not readable code, avoid using it

//correct way
if(balance > 500){
    // console.log("test1");
    // console.log("test2");
}



// if(balance < 500){
//     console.log("less than 500");
// }else if(balance > 750){
//     console.log("less than 750");
// }else if(balance > 900 ){
//     console.log("less than 900");
// }else if(balance > 1200){
//     console.log("less than 1200");
// }


const UserloggedIn = true;
const debitCard = true;

/// && (AND) operator ka use hum kar sakte hai jab hume dono conditions true honi chahiye

// if(UserloggedIn && debitCard){
//     console.log("Allow to purchase");
// }else{
//     console.log("Deny the purchase");
// }
// console.log("End of the code");


/// || (OR) operator ka use hum kar sakte hai jab hume koi bhi ek condition true honi chahiye

if(UserloggedIn || debitCard  || balance < 500){
    console.log("Allow to purchase");
}else{
    console.log("Deny the purchase");
}
console.log("End of the code");