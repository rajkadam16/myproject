// for loop
// for(let i=1;i<=3;i++){
//     console.log("raj")
// }
// let sum =0
// let num=2424
// for(i=1;i<=num;i++){
//     sum= sum+1
// }
// console.log(sum)

// do while

// let i=1
// do {
//     console.log(i)
//     i++
// } while (i<=5);

// for of
// for (let a of "raj") {
//     console.log(a)
// }

// for in
// let obj={
//     "raj":1,
//     "ayan":2,
//     "chetan":3,
//     "snadesh":4
// }
// for (let key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//      console.log(obj)
        
//     }
// }
// let sum=0
// for(i=1;i<=100;i++){
//    if(i%2 === 0){
//     console.log(i)
//    }else{

//    }
// }
// game using js
let gusNum = 10;
let num = prompt("guess the number")

while (num != gusNum) {
    num = prompt("wrong number")
}
console.log("congo u guess right num")