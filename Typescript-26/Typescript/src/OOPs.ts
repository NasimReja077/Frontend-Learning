// OOPs in TS - Classes, Access Modifiers, Getters & Setters, Static Members, Abstract Classes, Dependency Injection, 

// 
class Person {
    name: string
    age: number  
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


// class Chai {
//     flavour: string;
//     price: number
//     // constructor(flavour: string, price: number){ // parameterized constructor
//     //     this.flavour = flavour // this.flavour refers to the class property
//     //     this.price = price
//     // }
//     constructor(flavour: string){
//         this.flavour = flavour
//         console.log(this);
//     }
// }
// const masalaChai = new Chai("Gengar", 10) // ok
// masalaChai.flavour = "masala" 


// public, private, protected, readonly
class Chai {
    public flavor: string = "Masala"

    private secretIngredients = "Cardamom"

    reveal(){
        return this.secretIngredients //ok
    }

    // protected shopName = "Chai corner"
}

class Shop {
    protected shopName = "Chai corner"
}

// inheritance
class Branch extends Shop { // derived class
    getName(){ // method
        return this.shopName // ok
    }
}
// const c = new Chai()


class Walet{
    #balance = 100 // private field // # is used to declare private fields in JS/TS
    getBalance(){
        return this.#balance
    }
}
const w = new Walet() // instance

// console.log(w.getBalance());
// console.log(w.#balance); // error    
// console.log(c.flavor); // ok
// console.log(c.secretIngredients); // error
// const b = new Branch()
// console.log(b.getName()); // ok
// console.log(b.shopName); // error

// readonly
class Cup {
    readonly capacity: number = 250

    constructor(capacity: number) {
        this.capacity = capacity
    }
}

// getters and setters
class ModernChai {
    private _sugar = 2  // private property, _ is a convention to indicate private properties

    get sugar(){
        return this._sugar
    }

    set sugar(value:number){ // setter
        if (value > 5) throw new Error("Too Much Sweet");
        this._sugar = value 
    }
}

const c = new ModernChai()
c.sugar = 3

// console.log(c.sugar); // 3
// c.sugar = 6 // Error: Too Much Sweet
// console.log(c.sugar);

// static members
class EkChai {
    static shopName = "Chaicode Caffe"
    constructor(public flavar: string){}
}
console.log(EkChai.shopName);

// abstract classes
abstract class Drink {
    abstract make(): void 
}

class MyChai extends Drink {
    make(){
        console.log("Brewing Chai");
    }
}

// dependency injection
class Heater {
    heat(){}
}


class ChaiMaker {
    constructor(private heater: Heater){}

    make(){
        this.heater.heat()
    }
}
