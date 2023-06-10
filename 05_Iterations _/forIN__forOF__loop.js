//array specific loops 

// forof loop 
// const arr =[1,2,3,4,5,67,7,78]
// for (const num  of arr) {
//     console.log(num);
// }


// const greeting= 'hello bro!'
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// } 

//MAPS
const  map  = new Map()
map.set('IN','INDIA')
map.set('US','UNITED STATES')
map.set('UK','LONDON')
map.set('Fr','France')
map.set('Fr','France')


// console.log(map);

// for (const [key, value] of map) {
//     // console.log(key, ':-', value);

    
// }

//      

const myObj={
    'game0':'avatar',
    'game1':'spidermen',
}
// not work on obj 
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
    
// }


// to iterate the objects 

// forin loop works with  objects confirm 

// const myObject =  {
//     js:'javascropt ',
//     cpp:'c++',
//     c:'c',
//     rb:'ruby',
//     swift:'swift',

// }

// for (const key in myObject) {
//     console.log(`${key}  shortcut is for ${myObject[key]}`);
   
// }

//if we are using forin loop for array then this give us keys in form on index 0,1,2,3,
const  programming =['js', 'rb','c', 'cpp'];
for (const key in programming) {
    // console.log(programming[key])
   
}