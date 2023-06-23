const user = {
  userName: "kucu",
  price: 333,

  welcomeMessage: function () {
    console.log(`${this.userName},  welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage()
// user.userName= 'aniket'
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username= 'aj'
//     console.log(this.username);
// }
// chai()

// this keyword works only on objects

// const chai =  function() {
//     let username = 'kinju'
//     console.log(this.username);
// }
// chai()
//explicitely  lagana pad raha hai
// const chai =  () => {
//     let username = 'kinju'
//     console.log(this);
// }
// chai()

// arrow function

// {curly bracket use kiya toh return use karna padega }

// const store = (num1, num2)=>{

//     return num1+ num2

// }
// console.log(store(2,2));

// const example = (num1, num2) => (num1 + num2)

// implicit return in  arrow function
//()  (paranthesis me bhi return keyword use nahi karna padta hai very useful in react js and next js)

// const example = (num1, num2) => (num1 + num2)
const example = (num1, num2) => ({ username: "sonam" });

console.log(example(3, 4));


// const myArray =[ 2,4,5,5,4]
// myArray.forEach(()=>())