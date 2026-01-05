// filter loop


// const myNums = [1,2,3,4,5,6,7,8,,9,10]

// const newNums = myNums.filter( (num) =>{
//    return   num > 5
//     })
// console.log(newNums);



/// foreach loop 
// const newNums =[]
// myNums.forEach( (num) =>{
//     if ( num > 4){
//         newNums.push(num)
//     }
//      }
// )
// console.log(newNums);


const Books = [ 
    {tille: 'Book one' , genre: 'Fiction', publich: 1981,
        edition: 2004},
    {tille: 'Book Two' , genre: 'Non-Fiction', publich: 1992,
        edition: 2008},
    {tille: 'Book Three' , genre: 'History', publich: 1999,
        edition: 2007},
    {tille: 'Book Four' , genre: 'Non-Fiction', publich: 1989,
        edition: 2010},
    {tille: 'Book Five' , genre: 'Science', publich: 2009,
        edition: 2014},
    {tille: 'Book Six' , genre: 'Fiction', publich: 1987,
        edition: 2010},
    {tille: 'Book Seven' , genre: 'Hoistory', publich: 1986,
        edition: 1996}
];

let userBooks = Books.filter((bk) => bk.genre === 'History')
console.log(userBooks);

 userBooks =  Books.filter ( ((bk) =>
     {return bk.publish >= 1995 && bk.genre === "History" }))
console.log(userBooks);