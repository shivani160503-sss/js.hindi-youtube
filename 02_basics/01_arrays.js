//arrays

const myArr = [0,1,2,3,4,5]
const myHeroes = ["Susant", "prabhas"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);


//Array methods
myArr.push(6)
myArr.pop()
// console.log(myArr);


myArr.unshift(9)

myArr.shift()

//slice, splice

// console.log("A",myArr);

const mynew1 = myArr.slice(1,3)

// console.log(mynew1)
// console.log("B",myArr)


const mynew2 = myArr.splice(1,3)
// console.log("C",myArr)
// console.log(mynew2)




//++++++++++++++++  array2  ++++++++++++++++++++++++


const marvel_heros = ["thor" , "Ironman" , "Speiderman"]
const dc_heros = ["batman" , "superman" , "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);


const all_new_heros = [...marvel_heros, ...dc_heros]
//  console.log(all_new_heros);


const another_array = [1,2,3, [4,5,6],7,[6,7 , [4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Shivani"))
console.log(Array.from("Shivani"))