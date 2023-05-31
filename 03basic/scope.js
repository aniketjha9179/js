//  if(true){
//     let a =10
// const b = 12;
// var c =  23
// }
// // console.log(a);
// // console.log(b);
// console.log(c);

function one() {
  const userName = "Aniket ";
  function two() {
    const website = "website";
    console.log(userName);
  }
//   console.log(website);
//   two();
}
one();


if(true){
    const userName ='aniket'
    if(userName ==='aniket'){
        const website = ' youTUBE '
        // console.log(userName + website);
    }

    // console.log(website);
}
// console.log(userName);



// +++++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++
// this one is simple function  so we can call it before intitalize
console.log(addOne(5));
function  addOne(num){
    return num +1

 }

//if we are holding a function in variable then we call it then this will give use error :cannot access before  initialize before 
 addTwo(5)
 const addTwo =function(num){
    return num +2

 }