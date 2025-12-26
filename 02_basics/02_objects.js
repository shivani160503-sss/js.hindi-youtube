// Singleton
//object.create



const mysym = Symbol('key1');
//0bject literal
//// An object is a collection of key-value pairs.
const Jsuser = {
    name : "Shivani",
    "full name" : "Shivani Patel",
    age : 21,
    email : "sp.patel05@gmail.com",
    location : "India",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Friday"],


}
// console.log(Jsuser.email);
//2nd optin  we can also write like this
// console.log(Jsuser["email"]);

// console.log(Jsuser["full name"]); 
// console.log(Jsuser);

Jsuser.email = "shivani@gamil.com";
Object.freeze(Jsuser);
Jsuser.email = "shivani05@gmail.com";
// console.log(Jsuser.email);



Jsuser.greetingOne = function(){
    console.log("Hello Js user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello ${this.name}  Welcome back`);
}
 
console.log (Jsuser.greetingOne());
console.log (Jsuser.greetingTwo());