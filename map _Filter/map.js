// map creates a new array
// map take 3 argue, index , value , array
// ARRAY MAP METHOD
let arr = [45, 23, 21];
let a = arr.map((value, index, array) => {
  //   console.log(value, index, array);
  //   return value + value;
});
// console.log(a, arr);
// foreach   is a loop and goes through every array element

//ARRAY FILTER METHOD

let arr2 = [51, 31, 11, 2, 5, 6, 8];
let a2 = arr2.filter((a) => {
  return a < 10;
});
console.log(a2, arr2);

//REDUCE METHOD

let arr3 = [1, 2, 3, 5, 2, 1];
let newarr3 = arr3.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(newarr3);
