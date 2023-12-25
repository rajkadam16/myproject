let button = document.getElementById("btn")

// button.addEventListener("dblclick",()=>{
//     document.querySelector(".box").innerHTML="i am cliclk"
// })
button.addEventListener("contextmenu",()=>{
   alert("i am clike")
})
button.addEventListener("keydown",(e)=>{
    console.log(e,e.key)
 })