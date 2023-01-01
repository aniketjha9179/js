// // let data=8;

// // // //data type  there is two type pf dataType
// // // 1>primitive                                    2>Object
// // // >number
// // // >Boolean
// // // >null
// // // >undefined
// // // >Symbol
// // // maximum safe value in js
// // // 9007199254740991

// // let User= 'A \vniket \nReddy  '

// // // let user =FirstName +" " + LastName

// // console.log(User);

// // let bool =5<6
// // console.log(typeof bool);

// // let user
// // console.log(typeof user);

// // let num =6;
// // console.log(typeof(6/  "Aj" ));
// // // Nan
// // number
// // backward compatible means we can use old features

// // type conversion
// // let num= String(6)
// // console.log(num, typeof num )
// // changed numnber into  a string
// // reverse

// // let  num = Number("12434")
// // console.log(num, typeof num);

// let x;
// console.log(x, typeof x);
// x=8
// console.log(x, typeof x);

// x=x+""
// console.log(x, typeof x);

// x=x-2;
// console.log(x, typeof x);
// // based on the requirement js engine will change  this is known as coersion
// let x= Number("233 navin")
// console.log(x);
// // its not possible from this to covert string into number so we use parseInt
// let x= parseInt("234 ANiket ")
// console.log(x);
// let num  =4;
// // let x = ++num;
// // console.log(x, num);
// // let result  =Math.pow(4,4)
// // console.log(result);
// // from version  es6
// let result = 4**3
// console.log(result
//     );

// relational operators

// let x="pen"
// // let y="book"
// let y = "pencil"
// let data =x<y
// console.log(data);
// js use ASCII value  for this comparision

// let x ="2"
// let y=4;
// let data = x>y
// console.log(data);
// in this case js will convert string "2" into number then proceed forward

// let x="";
// let y= false ;
// let data = x==y// == to  will only check data not type  so this will give true value but

// console.log(data
// //     );
// let x="";
// let y= false ;
// let data = x===y // === to  will only check data  and type also  also , so
// // this will give false
// console.log(data
//     );

// logical operators
// And &
// OR  |
// Not !

// let x=7 , y=2 ,z=5
// let result = x<y  || x < z
// let n = !result
// console.log(result,n);

// conditional statements

// let num1 = 61;
// let num2 = 9;
// let num3 = 7;

// if (num1 > num2 && num1 > num3)
// { 
//     console.log("num1 is greater");
// }
// else if (num2 > num3) {
//   console.log("num2 is greatrr");
//   console.log("yeee");
// } 
// else {
// {
//     console.log("numr3 is greater");

// }
// }
// console.log("byee...");

let num1=3;

let result

// if(num1%2===0)
// result="even"

// else
// result="odd"

// turnery operator>> ?:
// turnery operator>> ?:
result= num1%2===0 ? "even " :  "odd";
console.log(result);