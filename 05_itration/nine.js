// reduce method

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (accumalator , currentvalue){
//     console.log(`accmulator: ${accumalator} and currentvalue: ${currentvalue}`);
//     return  accumalator + currentvalue;
    
// } ,0)

// also we can write in arrow function

const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
//console.log(myTotal);


const shoopingCart = [
    {
        itemName : "java course",
        price :  3999
    },
    {
        itemName : "react js course",
        price :  999
    },
    {
        itemName : "js course",
        price : 1999
    },
    {
        itemName : "data sciencecourse",
        price :  12999
    }
    ]
    const priceToPay = shoopingCart.reduce((acc,item) => acc + item.price,0 )
     console.log(priceToPay);
     
