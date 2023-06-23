const  marvel_heros=['Thor','Iron-man','Spiderman',true,22]
const dc=['supermen', 'batman', 'flash']

// marvel_heros.push(dc)
// console.table(marvel_heros);
// console.log(marvel_heros[2][1]);

// const allheroes= marvel_heros.concat(dc)
// console.log(allheroes);
// instead of using concat, and push use spread operator(...arrayName)
// const all_new_heroes = [...marvel_heros, ...dc]
// console.log(all_new_heroes);


const anotherAray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = anotherAray.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray('AJ'))
// from will convert into array 
console.log(Array.from('AJ'))
console.log(Array.from({name:'hitesh'}))//interesting

let scoreOne=100
let score2=200
let score3=300
console.log(Array.of(scoreOne,score2,score3));

