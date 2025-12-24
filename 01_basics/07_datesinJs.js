//Dates

let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(typeof myDate );

let myCreatedDate = new Date(2025, 0, 20);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myCreatedDAte = new Date ("2025-09-12");
// console.log(myCreatedDAte.toDateString());
// console.log(myCreatedDAte.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());