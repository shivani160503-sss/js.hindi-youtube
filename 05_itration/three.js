// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     swift: "swift by apple",
//     rb: "ruby"
// }


// (for of) rule

//["","",""]
// [ {}, {}, {} ]

const arr =  [1,2,3,4,5]

for (const num of arr){
    // console.log(num);
}

const greetings = "Helloworld !"
for (const greet of greetings){
//     console.log(`Each char is ${greet}`)
 }

 // Maps
// maps unique value ke liye jane jate he we cannot print same value  2nd time 
 const map = new Map()
 map.set('In', "India")
 map.set('usa', "united state of america")
 map.set('JN', "Japan")
 map.set('CH', "Chaina")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-', value);
    
    
}


const myObject = {
  ' game1' : 'NFS',
  'game2': 'Spiderman'
}
for (const[ key,value] of myObject) {
    console.log(key, ':-', value);
    
}