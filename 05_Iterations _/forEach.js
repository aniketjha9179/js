const   coding =[ 'js', 'ruby', 'java', 'cpp', 'c']
// coding.forEach(function(item){
//     console.log(item );
// })

// using arrow function 

// coding.forEach((item)=>{
//     console.log(item);
// })

// passing fun to foreach loop 

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item,index, arr)=>{
    // console.log(item,index,arr); 

})
//output
// js 0 [ 'js', 'ruby', 'java', 'cpp', 'c' ]

// using foreach to handle multiple array object 


const mycoding= [
    {
        languageName:'javascript',
        languagefile:'js'
    },
    {
        languageName:'java',
        languagefile:'java'
    },
    {
        languageName:'python',
        languagefile:'py'
    }

]

mycoding.forEach((item)=>{
    console.log(item.languageName);

})