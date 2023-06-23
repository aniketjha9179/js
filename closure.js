// a function that refers to variables declared by parent function still have access to those variable known as closure.

 function makeHelloFunction(){
     const message="hello";
     function sayHello(){
          console.log(message);
     }
     return sayHello
 }
 const sayHello = makeHelloFunction()
 sayHello()  