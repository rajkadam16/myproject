async function getdata(){
     return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("i am reslove")
        }, 5000);
     })
}
console.log("process data")

console.log("task 2")
async function main (){
data= await getdata()
console.log
console.log("process data")

console.log("task 2")
}
main()
// data=getdata()
// data.then((v)=>{
//     console.log(v)

//     console.log("process data")

// console.log("task 2")
// })
