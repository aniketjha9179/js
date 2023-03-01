// let MyDate= new Date()
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toISOString());
// console.log(MyDate.toLocaleString());
// console.log(MyDate.toUTCString());
// console.log(typeof MyDate);






// let myCreatedData= new Date(2023, 2, 1)
// let myCreatedData= new Date("2023-01-14");
let myCreatedData= new Date("01-13-2002");
// console.log(myCreatedData.toDateString());

// let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));


let newDate= new Date();
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
newDate.toLocaleString('default',{
weekday:"long"

})
console.log(newDate);