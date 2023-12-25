let prom1=new Promise((resovle,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("no random num will supp u1")
    }
    else{
      setTimeout(() => {
        console.log("raj")
        resovle("i am done")
      }, 1000);
    }
})

let prom2=new Promise((resovle,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("no random num will supp u2")
    }
    else{
      setTimeout(() => {
        console.log("raj")
        resovle("i am done")
      }, 1000);
    }
})
let prom3=new Promise((resovle,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("no random num will supp u3")
    }
    else{
      setTimeout(() => {
        console.log("raj")
        resovle("i am done")
      }, 1000);
    }
})
let prom4=new Promise((resovle,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("no random num will supp u4")
    }
    else{
      setTimeout(() => {
        console.log("raj")
        resovle("i am done")
      }, 1000);
    }
})
let prom5=new Promise((resovle,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("no random num will supp u5")
    }
    else{
      setTimeout(() => {
        console.log("raj")
        resovle("i am done")
      }, 1000);
    }
})
let prom6=new Promise((resovle,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("no random num will supp u6")
    }
    else{
      setTimeout(() => {
        console.log("raj")
        resovle("i am done")
      }, 1000);
    }
})

let p7=Promise.reject([prom1,prom2,prom3,prom4,prom5,prom6])
p7.then((a)=>{
    console.log(a)
}).catch(err=>{
console.log(err)

})