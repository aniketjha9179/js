
// truthy and falsy value 
//in this concept we assume that the value aree there without any if else condition check 

// const userEmail= 'aj@gmail.com';
const userEmail= [];
 

if(userEmail){
    console.log('got user Email');
}
else{
    console.log("Don't have user Email ");
}

// falsy value 
// false  , 0 -0,  BigInt()0n, "", null , undefined, NaN

// truthy value 
// "0", 'false','',[], {}, function(){}

// if(userEmail.length===0){
//     console.log('array is empty');
// }

const emptyObj ={lul:'aj'}
if(Object.keys(emptyObj).length===0){
console.log('object is empty');
}else{
    console.log('object has value ');
}

// 
// false ==0//true
// false ='' //true
// 0=='' //true