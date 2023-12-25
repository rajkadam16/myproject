let a = prompt("enter a number");
let b = prompt("enter a number");
if (isNaN(a) || isNaN(a)) {
    throw SyntaxError("please enter only number")
}
let sum = parseInt(a) + parseInt(b)
function main() {
    try {
        console.log(sum)
        return true
    } catch (error) {
        console.log("value is not define")
        return false
    }
    finally {
        console.log("code is end")
    }
}
let c= main()