function add(a: number, b: number): number {
  return a + b;
}

// Arrow function with types
const multiply = (a: number, b: number): number => a * b;

// Optional and default parameters
function greet(name: string = "Guest", age?: number) {
  return `Hello ${name}`;
}



class Person {
  private _name: string;     // private
  protected age: number;     // protected

  constructor(name: string, age: number) {
    this._name = name;
    this.age = age;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

class Employee extends Person {
  constructor(name: string, age: number, public department: string) {
    super(name, age);
  }
}

function identity<T>(arg: T): T {
  return arg;
}

const num = identity(42);           // number
const str = identity("hello");      // string

// Generic interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 100 };



// // utils.ts
// export const PI = 3.14;
// export function square(x: number) { return x * x; }

// // main.ts
// import { PI, square } from './utils';



// Partial, Required, Pick, Omit
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type UserName = Pick<User, "name">;
type UserWithoutId = Omit<User, "id">;

// Utility types with generics
type ReadonlyUser = Readonly<User>;


