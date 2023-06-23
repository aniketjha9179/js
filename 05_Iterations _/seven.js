
const myNumber = [1, 2, 3, 4, 6, 7, 8, 8, 10];
// const newnum = myNumber.map((num) => {return num + 10});
//chaining in  javascript 
// what is does is  it return value after value
const newNums = myNumber
.map((num)=>num*10)//num*10=10,20
.map((num)=>num+1)//num+1= 10+1=11, 20+1=21
.filter((num)=>num>=40)//it will print value which are greater than 40
console.log(newNums);//[ 41, 61, 71, 81, 81, 101 ]

