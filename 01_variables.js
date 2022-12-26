const accountId =144543
let accountEmail= 'aniketjha917928@gmail.com';

var accountPassword= '12345'
acountCity= 'Bhopal'

// accountId=2 not allowed
console.log(accountId);
accountEmail ="hc@email.com"
accountPassword='23233'
acountCity= "bangluru"
// if we have assigned the variable having no value than it will we undefined 
let accountState;

/*
Prefer not to use var 
because of issue  in block scope and functional scope
*/
// if we wanted to get more than one line of output than 
// prefare to use console.table([under all the variables using, coma,])

console.table([accountEmail,accountPassword, acountCity,accountState]);