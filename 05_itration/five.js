const coding = ["js", "ruby", "cpp", "py"]

coding.forEach( function (val) { // call back function
    // console.log(val);
    
})


coding.forEach ( (item) => { // arrow function

//    console.log(item)
})

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)


coding.forEach( (item,index,arr) => {
//    console.log(item,index,arr);
   
})


const myCoding = [
    {
        languagename : "javascript",
        languageFilename: "JS"
    },
    {
        languagename : "Python",
        languageFilename: "py"
    },
    {
        languagename : "java",
        languageFilename: "Java"
    }
 
]
myCoding.forEach((item) => {
    console.log(item.languageFilename);
    
} )