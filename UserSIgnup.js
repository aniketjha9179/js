const { emit } = require("nodemon");

const uid ='abc232';

var firstName ='Aniket'
let LastName="Jha";
let state= "MadhyaPradesh"
let city="bhopal"


var email= 'aniketjha917928@gmail.com'
var passward= '12345';
var confirmPassward= '12345';
var country= "India";

var courseCount =0;
var isLoggedInFromGoogle= false;

// fullName =  prompt("Enter Your Name");

// console.log( "full Name is : " ,fullName);
// console.log(email);
// console.log(uid);
console.log(`
with Unique ID: ${uid}
User is: ${firstName},
User is: ${LastName}
& Email is:${email}
and uses the passward:${passward} 
living State: ${state}
current City:${city}
country:${country}
loggedInfo:${isLoggedInFromGoogle
}
`);




