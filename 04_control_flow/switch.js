///syntax///
// switch (key){
//     case value :

//     break;

//     default:
//         break;
// }
const month = 3
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;//ye break likhna jaruri hai nahi to wo niche wale case ko bhi execute kar dega.
    case 4:
        console.log("April");
        break;

    default:
        console.log("Invalid Month");
        break;
}