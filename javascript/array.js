// basic of Array

// let arr=[1,2,3,4,5,6,7,8]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[4])
// console.log(arr.join(" o "))

// let num=[12,45,67,89]
// console.log(num.splice(1,2))



// loops in Array
// for loop

// let a=[3,14,5,6,7,48]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

// for each loop
// let a=[34,54,65,76,87]
// a.forEach((value,index,a)=> {
//     console.log(value,index,a)
    
// });

// for in loop

// let obj={
//     a:2,
//     b:3,
//     c:5
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
        
//     }
// }

// for of loop

// let a= [34,54,65,87]
// for (const value of a ) {
//     console.log(value)
    
// }


// map or filter in array

let a=[34,53,54,64]
const bigthense = (e)=>{
    if(e>53){
        return true
    }
    return false
}
console.log(a.filter(bigthense))


// let arr2 = [1,2,3,4,5,6]

// const red = (a, b)=>{
//     return a+b
// }

// console.log(arr2.reduce(red))


