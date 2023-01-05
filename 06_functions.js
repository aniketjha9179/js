// declaring a function
// function greet(user){//accepting a user
//     // meaning
//     // console.log("HELLO good morning");

// return (` Hello ${user}`);

// }
// // calling a function

// let user = "Aniket "
// let number= "232332233"
// let str= greet(user) //passing a user
// console.log(str);

// FUNCTION EXPRESION
//  let add = function(num1,num2)
//  {
//     return num1 + num2;
//  }
//  let sum= add;

// let result =  sum (5,6)
// console.log(sum);

// local variable  GLOBal variables

// let user = "Aniket ";
// function greet(u)
//  {
//    let num=6
//    console.log(num);
//  return(`hello ${u}`);
// }
// console.log("num value is " , num);

// let str = greet(user);
// console.log(str);

// arrow function
// let add = (num1, num2) => num1 + num2;
// let result = add(6, 6);
// console.log(result);

// ARROW functions

// let greet =  (user)=>{
//    console.log('halo' + user );
//    return 1;
// }
// console.log(greet(" navin"));

// function + object
// this keyword
// this  means current   >> object

// let laptop1 = {
//   cpu: "AMD 9500U",
//   brand: "MSI",
//   ram: 16,

//   compare:function(other){
//    if (this.cpu >other.cpu)
//     console.log(this);
//   else
//     console.log(other);

//   },

//   getConfig: function () {

//     console.log(laptop1.cpu);
//   },
// };
// let laptop2 = {
//   cpu: "AMD 7000U",
//   brand: "SONY",
//   ram: 16,

//   getConfig: function () {
//     console.log(this.cpu);
//   },
// };
// laptop1.compare(laptop2)

// constructor in js

// function Alien(name, tech) {
//   this.name = name;
//   this.tech = tech;
//   this.work = function () {
//     console.log("solving bugs from  using  videos ");
//   };
//   return 8;
// }
// let alien1 = new Alien("navin", "js");
// let alien2 = new Alien("AJ", "C++");

// alien1.tech = "blockchain";
// console.log(alien1);
// alien1.work();

// arrays
// Array

// creation of an array
// let values =[5,6,5];
// // values.push(6,54,64,545,54,454)//its work also to fetch values in array
// console.log(values[2]);//by this we can fetch  index values of an array

// array including  such as String, number ,  object,  function
// let data = [
//   "Aniket ",
//   "Aj",
//   "jay",
//   433,
//   { tech: "JAVA" },
//   function () {
//     console.log("hello world");
//   },
// ];
// console.log(data);
// // calling function by index value  and callback()
// data[5]();


 
// PUSH METHOD IN JS 

// let data=  [5,6,7,8,54]; //it will also give array value 
// console.log(data.push(3));//pushes 3 value at the last of the array
// console.log(data);

// POP METHOD
// in this method pop () last in first-out

// let data=  [5,6,7,8]; //it will also give array value 
// // console.log(data.push(3));//pushes 3 value at the last of the array
// console.log(data.pop());//which ever element will we there in the array will first to remove
// console.log(data);

// SHIFT METHOD IN JS

// so shift remove element from the  array to left hand side <======= for example

// let data= [3,4,5,6,65]
// console.log(data.shift());
// console.log(data);



// difference b/w 
// pop                            //  shift 
// [4,6,6,7,6]                       it remove the Element start                                  //   from last 
// it remove the Element
// from last 


// UNSHIFT METHOD IN   JS  
// it add a value in array in right hand side ==========>

// let data=[3,35,6,6]
// console.log(data.unshift(2,5,5,6));
// console.log(data);


// SPLICE METHOD IN  JS 
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements

 
let data= [5,6,7,8,67];
console.log(data.splice(2,2,11,22));//splice(2,1)(2 is index value and 1 is no. of values we want to remove)
console.log(data); 