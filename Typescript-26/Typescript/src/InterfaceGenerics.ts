// Interface  - is a way to define the structure of an object, 
// Generics - is a way to create reusable components that work with different types.

// In TypeScript, Interfaces and Generics are the "bread and butter" of building reusable, type-safe code. Think of an Interface as a blueprint for the shape of an object, and Generics as a way to make that blueprint flexible.

// Interfaces: The Structural Blueprint
// An interface defines the "contract" for what an object must look like. It doesn't care about logic; it only cares about the **structure**.


interface Laptop {
  brand: string;
  ram: number;
  isTouchscreen?: boolean; // Optional property
  boot: () => void;       // Function signature
}

const myMac: Laptop = {
  brand: "Apple",
  ram: 16,
  boot: () => console.log("Powering on...")
};

// Key Features:

// Extending:** You can build interfaces on top of each other using `extends`.
// Optional Properties:** Use `?` for things that might not be there.
// Read-only:** Use `readonly` to prevent a property from being changed after creation.


// Generics: The "Type Variable"
// Generics allow you to create components that work with a variety of types rather than a single one. This avoids using `any` and maintains type safety.
// Think of it as passing a parameter to a function, but instead of passing a **value**, you are passing a **type**.

// A Simple Generic Function - If you want a function to return exactly what is passed into it:

// <T> is a placeholder for the type
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello"); // T is now 'string'
let output2 = identity<number>(100);     // T is now 'number'


// Combining Interfaces and Generics 
// This is where the magic happens—especially when dealing with API responses or data collections.

// A generic interface
interface ApiResponse<T> {
  status: number;
  message: string;
  data: T; // The type of data is decided when we use it
}

interface User {
  username: string;
  email: string;
}

interface Product {
  title: string;
  price: number;
}

// Usage for Users
const userResponse: ApiResponse<User> = {
  status: 200,
  message: "Success",
  data: { username: "Alice", email: "alice@dev.com" }
};

// Usage for Products
const productResponse: ApiResponse<Product> = {
  status: 200,
  message: "Item found",
  data: { title: "Mechanical Keyboard", price: 150 }
};

// Generic Constraints - Sometimes you want a Generic to be flexible, but not *too* flexible. You can use `extends` to constrain what `T` can be.

interface HasLength {
  length: number;
}

// This function only accepts types that have a .length property (strings, arrays, etc.)
function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

logLength("Hello"); // Works (string has length)
logLength([1, 2, 3]); // Works (array has length)
// logLength(10);    // Error: number doesn't have a .length property