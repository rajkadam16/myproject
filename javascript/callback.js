const mb=()=>{
    console.log("muselblezzzz")
}
const kn=()=>{
    console.log("end")
 
}
const p=(arg)=>{
    console.log("king")
}

const  callback=(arg)=>{
    console.log(arg)
    kn()
    mb()
    p()
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry",kn,mb);
    sc.onload=p("rajj")

    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )