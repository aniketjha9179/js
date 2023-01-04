// there is so many ways of creating object in js 

// 1>OBJECT LITERAL
let Alien = 
{
    name:"aniket",
    tech:"js",  
    sp:"cpp",
    // 'work-exp':"four year"
    laptop: {
        ram:8,
        cpu:5500,
        brand1:"MSI"
  
    }

}
// console.log(Alien.laptop.brand.length);
delete Alien.tech
console.log(Alien)