//Immediately  Invoked Function Expression (IIFE)

//global scope ke pollution se problem hoti hai  toh use 
//global scope variable pullution ko  Hatane ke liye hamne (IIFE ) use kiya 


//writing two iife

(function chai (){
    //named IIFE
    console.log('DB CONNECTED');
    //giving an end point to function ;by semicolon
})();




//to pass the variable 
//providing it as parameter


//passing the paramenter also
( (name)=>{
    //UnNammed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Aniket ')
//giving an argument to  call as a function