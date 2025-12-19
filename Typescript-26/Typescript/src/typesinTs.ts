// Type Annotations and Inference in TypeScript
// This file demonstrates how TypeScript uses type annotations and type inference
// to ensure type safety in variables, functions, and objects.
// Type Annotations
let explicitString: string = "Hello, TypeScript!";
let explicitNumber: number = 42;
let explicitBoolean: boolean = true;
// Type Inference
let inferredString = "This is inferred as a string";
let inferredNumber = 100; // inferred as number
let inferredBoolean = false; // inferred as boolean
// Function with Type Annotations
function add(a: number, b: number): number {
     return a + b;
}
const sum = add(5, 10); // sum is inferred as number
// Function with Type Inference
function multiply(x: number, y: number) {
     return x * y; // return type is inferred as number
}
const product = multiply(4, 5); // product is inferred as number
// Object with Type Annotations
interface Person {
     name: string;
     age: number;
}    
const explicitPerson: Person = {
     name: "Alice",
     age: 30
};

// Object with Type Inference
const inferredPerson = {
     name: "Bob",
     age: 25
};
// inferredPerson is inferred as { name: string; age: number; }
// Array with Type Annotations
let explicitArray: number[] = [1, 2, 3, 4, 5];
// Array with Type Inference
let inferredArray = ["apple", "banana", "cherry"]; // inferred as string[]
// Tuple with Type Annotations
let explicitTuple: [string, number] = ["age", 30];
// Tuple with Type Inference
let inferredTuple = ["height", 180];
// inferredTuple is inferred as (string | number)[]
// Union Types with Type Annotations
let explicitUnion: string | number = "This can be a string or a number";
explicitUnion = 50; // valid
// Union Types with Type Inference
let inferredUnion = Math.random() > 0.5 ? "A string" : 100;
// inferredUnion is inferred as string | number
// Type Assertions
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
// Conclusion: TypeScript's type annotations and inference help catch errors early and improve code quality.


// ==========================
let drink = "chai";
let cups = Math.random() > 0.5 ? 10 : 5;
console.log(`I'd like ${cups} cups of ${drink}, please.`);

let firstName = "Nasim";
let chaiFlavor: string = "cardamom";
chaiFlavor = "ginger";
console.log(`Hello, my name is ${firstName} and I like ${chaiFlavor} chai.`);
let chaiOrder: boolean
     = true;
console.log(`Chai order status: ${chaiOrder}`);
let sugarPackets = 3;
console.log(`Number of sugar packets: ${sugarPackets}`);