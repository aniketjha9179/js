// // for each 
// // it can take 3 parameter 

// // let array = [33.4,55.34,45.4,4454,5.45,];
// // console.log(array);

// // array.forEach((n,i,array)=>{
// //     console.log(n,i,array);
// // })

// // // filter 
// // let nums=[41,32,423,43,44,55,64];
// // console.log(nums.filter(n=>n%2===0))  ;  



// //  let nums=[43,423,44,55,66,34];
// //  nums.filter(n=>n%2===0)
// //  .map(n=>n*2)
// //  .forEach(n=>{
// //     console.log(n);
// //  })


// // map and reduce
// let nums=[1,2,3,4,5,6 ];  
// let result =nums.filter(n=>n%2===0)
// .map(n=>n*2)
// .reduce((a,b)=>a+b);
// console.log(result); 

// set  unordered list  unique(it has index VALUE)
// in set we dont have repeated value 
// let nums=new Set();
// nums.add(3);
// nums.add(4);
// nums.add(3);
// nums.add("navin");
// nums.add("sulka");
// nums.add("chiku");

// // nums.forEach(value=>{
//     //     console.log(value);
//     // })
    
//     console.log(nums.has("navin"));

// map is a class 
//set  updates the value if exist 

let map = new Map();
map.set("navin","java");
map.set("Aj","c++");
map.set("sonam","native");
map.set("navin","js");

// console.log(map.keys());
// console.log(map.get("navin"));//value

// for(let [k,v] of map){
//     console.log(k, " : ", v);
// } 
map.forEach((v,k)=>{
    console.log(k," : ", v );
})