const { add } = require("nodemon/lib/rules");

const user = {
  userName: "aj",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to website`);

    console.log(this);
  },
};
// user.welcomeMessage()
// user.userName='rohan'
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let userName ='AJ'
//     console.log(this.userName
//         );
// }
// one()

// const one = function() {
//     let userName='AJ'
//     console.log(this.userName);

// }
// one()

// const one = ()=> {
//     let userName='AJ'
//     console.log(this);

// }
// one()

// if we are using {curly-braces} then we need to return key
// explicitly ho raha hai
// const addatwo = (num1,num2)=>{
// return num1 +num2
// }
// implicit return
//one line return
// means me maan leta hu ki return likhne ki jarurat nahi hai
// const addatwo = (num1,num2)=> num1 +num2
// (paranthesis) use kiya so we don't need to  write or use return keyword
// const addatwo = (num1,num2)=>( num1 +num2)
const addatwo = (num1, num2) => ({ userName: "aniket " });

console.log(addatwo(2, 2));
