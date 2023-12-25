function adj() {
    let a = "crazy"
    let b = "amzing"
    let c = "fire"
    let d = Math.floor(Math.random() * 3)
    if (d == 0) { return a }
    else if (d == 1) { return b }
    else if (d == 2) { return c }
}

function shopName() {
    let a = "engin"
    let b = "food"
    let c = "gurments"
    let d = Math.floor(Math.random() * 3)
    if (d == 0) { return a }
    else if (d == 1) { return b }
    else if (d == 2) { return c }
}

function anotherWord() {
    let a = "bros"
    let b = "limited"
    let c = "hubs"
    let d = Math.floor(Math.random() * 3)
    if (d == 0) { return a }
    else if (d == 1) { return b }
    else if (d == 2) { return c }
}

console.log("bussines name\n", adj(), shopName(), anotherWord())