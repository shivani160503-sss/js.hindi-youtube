// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 2);
// console.log(2 <= 2);
// console.log(2 == 2);
// console.log(2 != 2);

// console.log("2" > 1);  // true, string "2" is converted to number 2
// console.log("01" == 1); // true, string "01" is converted to number 1
// console.log(true == 1); // true, boolean true is converted to number 1
// console.log(false == 0); // true, boolean false is converted to number 0

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0);  // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// Explanation:
// In comparisons, null is converted to 0, so null >= 0 is true, but null > 0 is false.
// undefined is not converted to a number in comparisons, leading to all comparisons with it returning false.
