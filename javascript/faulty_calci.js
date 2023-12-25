let randon= math.randon()
console.log(randon)
let a= prompt("enter first number")
let c= prompt("enter operator")
let b= prompt("enter second number")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if(randon>0.1){
    console.log(`the result is ${a} ${c} ${b}` )
    alert(`the reult is ${eval (`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`the reult is ${eval (`${a} ${c} ${b}`)}`)
}