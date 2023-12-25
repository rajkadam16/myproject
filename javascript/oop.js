class Animal {
    constructor(name) {
        this.name = name
        console.log("objet is created")
    }
    eats() {
        console.log("i am eating")
    }
    jumps() {
        console.log("i am jumping")
    }  
}

class tree extends Animal {
    constructor(name) {
        super(name)
        console.log("objet is created and done")
    }
    eats() {
        super.eats()
        console.log("i am eating")
    }

}
let a = new Animal("tiger")
console.log(a)

let b = new tree("leaomytree")
console.log(b)