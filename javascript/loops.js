let scor = prompt("enter your marks")
let grade;
if (scor > 100) {
    console.log("please enter your proper marks")
} else if (scor >= 90 && scor <= 100) {
    grade = "A"
} else if (scor >= 70 && scor <= 89) {
    grade = "B"
} else if (scor >= 60 && scor <= 69) {
    grade = "C"
} else if (scor >= 50 && scor <= 59) {
    grade = "D"
} else if( scor < 49){
    console.log("ur are fail")
}

console.log("your grade is ", grade)