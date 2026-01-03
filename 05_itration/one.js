// for loop from 0 to 10

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element  == 5 ) {
        // console.log("5 is detected");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`   Inner loop value : ${j}`);
    
}
}
let myArray = [12,23,34,45,56,67,78,89,90];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(`Array element at index ${i} is ${element}`);
}


// break and continue
for (let i = 0; i <=15; i++) {
    if (i == 5) {
        console.log("5 is detected");
        // break; //ye loop ko yahi rok dega jab i ki value 5 hogi
        continue; //ye 5 ko skip kar dega aur aage badh jayega
    }
    console.log(i);
}