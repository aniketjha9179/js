const myNums = [1, 2, 3, ];
// let myTotal = myNums.reduce(function(accumulator, curVal)  
// {   console.log(`accu:${accumulator} and curVal: ${curVal}`);
//   return accumulator + curVal;
// }, 0);


// using arrow function 
// let myTotal = myNums.reduce((accu, curVal)=>accu+curVal,0)

// console.log(myTotal);




const shoppingCart = [
    {
    itemName:' JS course',
    price:2999, 
},
{
    itemName:' Python course',
    price:99, 
},


{
    itemName:' C++ course',
    price:299, 
},


{
    itemName:' flutter course',
    price:999, 
},
]

let pricetoPay =shoppingCart.reduce(( acc, item)=>acc + item.price,0)
console.log(pricetoPay);