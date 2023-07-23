const promiseOne = new Promise((resolve, reject) => {
  //do an async task
  // db calls,cryptography related, network related work
  setTimeout(() => {
    console.log("async task is complete");
    resolve();
  }, 1000);
});

// .then is connected to resolve statement
promiseOne.then(() => {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task two");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async two resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "Aniket", email: "aj@gmail.com" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "pokemon", password: 123 });
    } else {
      reject("Error:something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((myusername) => {
    console.log(myusername);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(()=>{
    console.log('The promise is either resolved or rejected');
  })

  const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if (!error) {
          resolve({ username: "javascript", password: 123 });
        } else {
          reject("Error:javascript  went wrong");
        }
      }, 1000);

  });
 async  function consumePromiseFive(){
    try {   const response =  await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
 }
 consumePromiseFive()





//  async function  getAllUsers(){
//     try {
//         const  response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
        
//     }

//  }
// getAllUsers()

// .then.catch() method 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);

})
.catch((error)=>console.log(error))












