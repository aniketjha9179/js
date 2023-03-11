// To create  a promise object we use the Promise() constructor 

// also  the promise() constructor  takes a function() as an agrument , & the function also takes two arguments or paramenter (resolve , reject)

// if the promise returns successfully the resolve() function is called ,
// if the promise returns with errors than the reject() is called 


const ticket = new Promise(function(resolve, reject){
  const  isBoarded =false;
  if(isBoarded){
    return resolve('you are not in the Flight',data )
  }
  else{
    reject("your flight has been cancelled")

  }
} );

ticket.then((data)=>{
    console.log("whooooo");
}).catch((data)=>{
    console.log("oh no",data);
})
.finally(()=>{
    console.log("I will alawys executed ");
})