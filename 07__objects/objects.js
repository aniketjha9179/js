//singletone



const mySym = Symbol("key1")



// object literals
const Jsobject={
    name:'Aniket ', 
    "fullName":'aniket Jha',
    [mySym]:'myKey1',
    age:20,
    email:'aj@email.com',
    isloggedIn:false,
    lastLoginDays:['mondays', 'saturday']
}


// console.log(Jsobject.fullName);
// console.log(Jsobject['email']);
// console.log(Jsobject[mySym]);
// console.log(Jsobject);

// Jsobject.email='kl@gmail.com'
// Object.freeze(Jsobject)
// Jsobject.email='aniketjha@gmail.com'
// console.log(Jsobject.email);



Jsobject.greeting = function(){
    console.log("hello bro js user ");
}
Jsobject.greetingTwo = function(){
    console.log(`Hello js User ${this.name}`);
}
console.log(Jsobject.greeting());
console.log(Jsobject.greetingTwo());