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
