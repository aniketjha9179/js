


function calculateCartPrice(...num1){
return num1

}
// this will provide an array 
console.log(calculateCartPrice(2, 4));

//passing object to an function

const object ={ 
    myName:'Aniket',
    age:21,
    price:'8a',
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.myName} and price is ${anyObject.price} `);

}
handleObject(object)

//passing an array to an function

const myarray =[2,3,4,54,5];

function handleArray (getArray){
    console.log("this is array" ,getArray[1]);
}
handleArray(myarray)