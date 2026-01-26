
// function declaration

// function functionName(parameter1: type, parameter2: type): returnType {
//      // function body
//      return value;
// }

function makeChai(type: string, cups: number){
     console.log(`Making ${cups} cups of ${type} chai.`);
}
makeChai("Milk", 3);


// function expression
function getChaiPrice():number{
     return 35
}

// arrow function
const getChaiPriceArrow = (): number => {
     return 40
}

// return types and void
function makeOrder(order: string){
     if (!order) return null;
     return order;
}

// void return type
function logChai(): void{
     console.log("Chai is ready!");
}

// optional and default parameters

// function orderChai(type?: string){}

// default parameter
function orderChai(type: string = "Masala"){
     console.log(`Ordering a cup of ${type} chai.`);
}
orderChai();


// default parameter with multiple parameters

function makeTea(type: string, cups: number = 1){
     console.log(`Making ${cups} cups of ${type} tea.`);
}    
makeTea("Green", 2);
makeTea("Black");


// object parameter
function createChai (order: {
     type: string;
     sugar: number;
     size: "small" | "medium" | "large";
}): number {
     return 5
}

createChai({
     type: "Ginger",
     sugar: 1,
     size: "large"
}); 

const chaiOrder = {
     type: "Masala",
     sugar: 2,
     size: "medium" as "small" | "medium" | "large" // "medium" as "small" mense that we are asserting the type here, otherwise it will give error, because by default it will consider it as string. 
}
createChai(chaiOrder); 

// function overloading - multiple function signatures for a single function implementation, to handle different parameter types or counts.

function prepareChai(type: "Masala"): string;
function prepareChai(type: "Ginger"): string;
function prepareChai(type: string): string {
     return `Preparing a cup of ${type} chai.`;
}
prepareChai("Masala");
prepareChai("Ginger");

// prepareChai("Green"); // Error: No overload matches this call
prepareChai("Lemon");

// rest parameters
function serveChai(...guests: string[]): void {
     guests.forEach(guest => {
          console.log(`Serving chai to ${guest}.`);
     });
}
serveChai("Alice", "Bob", "Charlie");

// function type aliases
type ChaiMaker = (type: string, cups: number) => void;
const brewChai: ChaiMaker = (type, cups) => {
     console.log(`Brewing ${cups} cups of ${type} chai.`);
}
brewChai("Herbal", 4);


// generic functions - create reusable components that work with various data types while maintaining type safety.

function wrapInArray<T>(item: T): T[] { // T is a placeholder for any type
     return [item]; // returns an array containing the item
}
const numberArray = wrapInArray<number>(42);
const stringArray = wrapInArray<string>("Hello");
console.log(numberArray); // [42]
console.log(stringArray); // ["Hello"]


// Callback functions - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// sintax: function outerFunction(callback: (parameter: type) => returnType): void {
//      // function body
//      callback(argument);
// }

function prepareAndServeChai(type: string, callback: (message: string) => void): void {
     const message = `Chai of type ${type} is ready!`;
     callback(message);
}
// Using arrow function as callback
prepareAndServeChai("Masala", (msg) => {
     console.log(msg);
});
prepareAndServeChai("Ginger", function(msg) {
     console.log(msg);
});  


// Immediately Invoked Function Expression (IIFE)
(function(type: string){
     console.log(`IIFE: Making a cup of ${type} chai.`);
})("Lemon");

