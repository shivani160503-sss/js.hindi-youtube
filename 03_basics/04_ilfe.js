// Immediately Invoked Function Expression (IIFE)


function chai(){
    console.log("This function runs immediately upon definition!");
}
// chai()



//Global scope ke pollution se bachne ke liye IIFE ka use kiya jata hai.

(function chai(){
    console.log("DB Connected");
})(); //immediately invoked funtion ko end karne ke liye semicolon (;)lagana jaruri hai.

((name) => {
    console.log(`DB Connected Two ${name }`);
})(` shivani`);