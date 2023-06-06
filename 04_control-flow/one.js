// const score =200;
// if(score>100){
//     const power ='fly'
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);

const balance = 4000;
// implicite scope //man liya {scope hai}
//never use this kind of syntax
// if (balance > 500) console.log("test"),console.log('test2');

// if(balance<500){
//     console.log('less thanm500 ');

// }else if(balance<750){
//     console.log('less than 750');
// }
// else if(balance<950){
//     console.log('less than 950');
// }
// else {
//     console.log('less than 5000');
// }

const uesrLoggedIn = true;
const dabitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
const guestUSer = false
if (uesrLoggedIn && dabitCard && 2 == 2) {
  console.log("allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail || guestUSer)  {
    console.log('userLogged in');
}


// &&  conditions should be true 
// || one should be true


//Nullish Coalcing Operator(??)
// null undefined 
// ?? null value ki safety check karta hai


let val1 ;
// val1 = 5 ?? 10
// val1 = null?? 10
// val1 = undefined ?? 15


//whatever the first value is there  will  be assign  first

val1 = null ?? 10 ?? 11

console.log(val1);


//Terniary Operator

// condition ? true :false

const  iceTeaPrice =100
// iceTeaPrice >=80 ? console.log('less  than 80') : console.log('more than 100')
iceTeaPrice >=80 ? console.log('greater the 80') : console.log('more than 100')