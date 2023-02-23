// So there is two memory location 
// 1>>stack(primitive);also from this(stack) we get copy,
// 2>>heap(non primitive )from this(non primitive) we get ReferenceError


// for example
let myYoutubeName = 'AniketJha';

let anotherName =myYoutubeName; 
 console.log(anotherName);


var userOne={
    email:'aj@google.com',
    upi:'aj@ybl'
 }

 var userTwo=userOne
// this will use as refrence for userone 

 userTwo.email='aniket@gamil.con'
 console.log(userTwo);
