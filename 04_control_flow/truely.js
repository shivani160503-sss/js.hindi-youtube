// const username = "s@hivani"
// if(username){
//     console.log("Valid User");
//  }else{
//     console.log("Invalid User");
//  }

// const username = "" //empty string is considered as false
// if(username){
//     console.log("Valid User");
//  }else{
//     console.log("Invalid User");
//  }

const username = [] //empty array is considered as true
if(username){
    console.log("Valid User");
 }else{
    console.log("Invalid User");
 }

 //falsy values in javascript
 //1. false
 //2. 0 , -0
 //3. "" (empty string)
 //4. null
 //5. undefined
 //6. NaN (Not a Number)
 //7. BigInt 0n

 //everything else is considered as truthy value in javascript
   //1. true
   //2. any non-zero number (positive or negative)
   //3. any non-empty string
   //4. objects
   //5. arrays (even empty arrays)
   //6. functions
   //7. BigInt other than 0n

   //truthy values
   // "0" , 'false' , " " , [] , {} , function(){} , 12n



   ///Nullish Coalescing Operator (??) ///
  
   const user = null;
   const defaultUser = "Guest User";
   const currentUser = user ?? defaultUser;
   // console.log(currentUser); // Output: "Guest User"

   let val1;
   //  val1 = 23 ?? 54
   //  val = null ?? 45
   val1 = undefined ?? 23 
   // val1 = null ?? 10 ?? 45

//  console.log(val1); // Output: 23


//Terniary Operator //
// condtion ? true : false 
const iceTeaPrice =  100
iceTeaPrice >=  80 ? console.log("Ice tea is expensive") : console.log("Ice tea is cheap")

   