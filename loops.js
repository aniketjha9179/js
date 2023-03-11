// one piece of code can be run
// let step = 0;
// while (step < 5) {
//   console.log("step", step);
//   step += 1;
// }

// while loop vs for  loop a for loop is used when number of iteration is known ,
// vs
// while loop are usually used when number of iteration are unknown

// let step=6;
// do{
// console.log('step',step)
// step+=1;
// }while(step<5)

let step = 0;
while (step < 5) {
  step += 1;
  if (step === 2) {
    continue;
  }
  console.log("step", step);
}
