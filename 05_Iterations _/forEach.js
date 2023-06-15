const coding = ["js", "ruby", "java", "cpp", "c"];
// coding.forEach(function(item){
//     console.log(item );
// })

// using arrow function

// coding.forEach((item)=>{
//     console.log(item);
// })

// passing fun to foreach loop

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
  // console.log(item,index,arr);
});
//output
// js 0 [ 'js', 'ruby', 'java', 'cpp', 'c' ]

// using foreach to handle multiple array object

// const mycoding= [
//     {
//         languageName:'javascript',
//         languagefile:'js'
//     },
//     {
//         languageName:'java',
//         languagefile:'java'
//     },
//     {
//         languageName:'python',
//         languagefile:'py'
//     }

// ]

// const values = mycoding.forEach((item)=>{
//     // console.log(item);
//     return item

// })
// console.log(values);

// forech never return values

// const myNums =[1,2,3,4,5,6,7,8,9,10];
// let newNums= myNums.filter((num)=>{
//     return num>4
// })
// console.log(newNums);

const book = [
  {
    title: "book One",
    genre: "fiction",
    publish: 1981,
    editon: 2004,
  },
  {
    title: "book Two",
    genre: "non-fiction",
    publish: 1941,
    editon: 2015,
  },
  {
    title: "book three",
    genre: "comic ",
    publish: 2007,
    editon: 2004,
  },
  {
    title: "book four",
    genre: "marvvel",
    publish: 2003,
    editon: 2004,
  },
  {
    title: "book five",
    genre: "dc comic",
    publish: 1996,
    editon: 2024,
  },
  {
    title: "book six ",
    genre: "man",
    publish: 2000,
    editon: 2014,
  },
  {
    title: "book seven ",
    genre: "history",
    publish: 2000,
    editon: 2016,
  },
];

// let userBooks = book.filter((bk) => bk.publish === 2016);
let userBooks = book.filter((bk) => {
  return bk.publish>=1995 && bk.genre=== "dc comic"
  
  ;
});

console.log(userBooks);