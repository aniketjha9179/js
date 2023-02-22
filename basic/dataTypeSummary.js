// on the basis of data ko kaise memory  me rakha jata hai or access kiya jata hai they are divied into two parts
// (1).primitive
// (2).Non-primitive 

const score =100;
const num =100.22;
const isLoggedIn=false;
const outSideTemp=null;

const id= Symbol("123");
const anotherId= Symbol("123");
// symbol assign uniqe value  
console.log(anotherId===id);
// bigInt
const bigNum=1223232323232322332n
console.log(typeof(bigNum));


// Refrence (NON PRIMITIVE)
// ARRAY , OBJECTS, FUNCTIONS

const hero=['shaktiman', 'nagRaj', "IROnMAn"]//arrays

var myObj = {
    name:"AJ",
    age:22,
    College:'sirt '

}

const myfunction = function(){
    console.log("hello");
}

    console.log(typeof hero);
    //function object