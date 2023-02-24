   const names="Aniket";
   const repoCount=50;
//    console.log(names + repoCount + "value");
console.log(`hello my name is ${names.toUpperCase(names)} and  my repo count is ${repoCount}`);


const gameName= new String('Ani-ket-com')//string as an object

// Their Methods
console.log(gameName[5]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

 const newString = gameName.substring(0,4)
 console.log(newString);
 const anotherString = gameName.slice(-6,4)//also we can provide negative value so this will  start reverse
 console.log(anotherString);
//  trim and replace
const newStringOne="      Aniket           "
console.log(newStringOne);
console.log(newStringOne.trim());// trim will remove starting space and end space this will remove  

const url= "https://webginner.com%20 aniketjha9179";
console.log(url.replace('%20', "_"));//first parameter to "remove" second parameter " what u want to replace";

//we can search through this line that parameter holds this or not
console.log(url.includes("aniketjha"))

console.log(gameName.split("-"));

const symbol={};
// symbol[Symbol.iterator]=function*(){
//    yield 1;
//    yield 2;
//    yield 4;
// }
// console.log([...symbol])


const worldString = "Hello, world";
//                    DEPRECATED METHOD
console.log(worldString.blink()); // <blink>Hello, world</blink>

