const score = 440;

// var balance = new Number(300)
// console.log(balance);
// console.log(score);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1123.5353;
// // use precisely  in future its like ceil and floor from c++
// console.log(otherNumber.toPrecision(3));

var hundreds = 100000000;
// console.log(hundreds.toLocaleString('en-IN'));

var num = 9007199254740991;
// console.log(num.toString().length);

// // ++++++++++++++++++++++++++++++++++++MATH+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // baat karenge math ke bare me  or ye js ke sath ati hai by default

// console.log(Math);
// // in absolute method negative will change in positive but positive remain same
// console.log(Math.abs(-4));
// console.log(Math.round(4.900));
// console.log(Math.ceil(4.900));
// console.log(Math.floor(4.900));

// console.log(Math.pow(33,2));
// // if we want to find max and min from any array
// console.log(Math.max(33,2,3,43,435435,6,46,46,54,66,456,5,6));
// console.log(Math.min(33,2,6,45,467,577575,0,0,0));

console.log(Math.random());

console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 29;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
