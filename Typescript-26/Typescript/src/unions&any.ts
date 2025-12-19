// Unions and Any is a TypeScript feature that allows variables to hold multiple types of values.
// union type allows a variable to be one of several types, while the any type allows a variable to hold any type of value without type checking.
// any type is more flexible but less safe compared to union types.
// Unions and Any type examples in TypeScript
let unionVar: string | number;
unionVar = "Hello, TypeScript!";
console.log(unionVar); // Output: Hello, TypeScript!
unionVar = 42;
console.log(unionVar); // Output: 42
let anyVar: any;
anyVar = "This can be anything";
console.log(anyVar); // Output: This can be anything
anyVar = 100;
console.log(anyVar); // Output: 100
anyVar = { key: "value" };
console.log(anyVar); // Output: { key: 'value' }
anyVar = [1, 2, 3];
console.log(anyVar); // Output: [ 1, 2, 3 ]
anyVar = true;
console.log(anyVar); // Output: true
anyVar = null;
console.log(anyVar); // Output: null
anyVar = undefined;
console.log(anyVar); // Output: undefined

//=============

let subs: number | string = '1M';
let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

let airlineSeat: 'aisle' | 'middle' | 'window' = 'aisle';
airlineSeat = 'window'; // valid
// airlineSeat = 'front'; // Error: Type '"front"' is not assignable to type '"aisle" | "middle" | "window"'
console.log(airlineSeat); // Output: window
//=============

const orders = ["100", "200", "300", "400", "500", "600"];
let currentOrder; // inferred as any

for (let order of orders){
     if (order === '200'){
          currentOrder = order;
          break;
     }
     currentOrder = "50"; // assigning a string value
}

console.log(currentOrder); // Output: 200

// Here, currentOrder is inferred as string | undefined because it may not be assigned if '200' is not found in the array.
// ======
