
// singleton object 
// const tinderUser=new Object()
// doubleton object 
const tinderUser  = {}

 tinderUser.id='123abc'
 tinderUser.name='ANi'
 tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser ={
email:'some@gmail.com',
fullName:{
    userFullName:{
        firstName:'aj',
        lastName:'Jha'
    }
}
}

// console.log(regularUser.fullName.userFullName.lastName);


const obj1={
    1:'a',
    2:'b'
}
const obj2={
    3:'c',
    4:'d'
}
// const obj3= {obj1 , obj2}
// combining more than one object 
// const obj3 = Object.assign({},obj1, obj2)
const obj3 ={...obj1, ...obj2}
// console.log(obj3);

const users=[
    {
        id:1,
        email:'aj#gmaail.com',
    },
    {
        id:1,
        email:'aj#gmaail.com',
    },
    {
        id:1,
        email:'aj#gmaail.com',
    },
    {
        id:1,
        email:'aj#gmaail.com',
    },
    {
        id:1,
        email:'aj#gmaail.com',
    }, {
        id:1,
        email:'aj#gmaail.com',
    },
    {
        id:1,
        email:'aj#gmaail.com',
    },
    {
        id:1,
        email:'aj#gmaail.com',
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLogged'));





