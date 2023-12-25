async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(23)
        }, 2000);
    })
}
// iife (Immediately Invoked Function Expression) function
(async function main() {
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
})()

//de structureing

// let [a,b, ...rest]=[2,3,3,5,3,5,3]
// console.log(a,b,rest)

// let obj={
//     a:2,
//     b:5,
//     c:6
// }
// let {a,b}=obj
// console.log(a,b)


function sum(a,b,c){
    return a+b+c
}
let arr=[4,3,2]
console.log(sum(arr[0],arr[1],arr[2]))
console.log(sum(...arr))