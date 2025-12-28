const course = {
    coursename : "Js in Hindi",
    price : 999,
    courseInstructor : "Shivani Patel",
}
// console.log(course);


//course.courseInstructor
const {courseInstructor : instructor} = course; // object destructuring
// console.log(courseInstructor);
console.log(instructor);

// {
//   "  name" : "shivani",
//    " courseName" : "jsinhindhi",
//     "price$" : 999
// }

[
    {},
    {},
    {}
]

//all the object is json  format but all json is not object