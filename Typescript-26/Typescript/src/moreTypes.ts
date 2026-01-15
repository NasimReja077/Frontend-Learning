let response: any = "42";

let numericLength:number = (response as string).length

type Book = {
     name: string
}

let bookString = '{"name":"My name is Mr.Who"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement


let value:any

value = "chai"
value = [1, 2, 3]
value = 2.5
value.toUpperCase()

let newValue: unknown

newValue = "chai"
newValue = [1, 2, 3]
newValue = 2.5
if (typeof newValue === "string"){
     newValue.toUpperCase();
}

try {
     
} catch (error) {
     if (error instanceof Error){
          console.log(error.message);
     }
     console.log("Eror", error);
}

const data:unknown = "chai aur code"
const strData: string = data as String // Use lowercase 'string' for the primitive type

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void{
     if (role === "admin"){
          console.log("Redirecting to admin deshboard");
          return;
     }
     if (role === "user"){
          console.log("Redirecting to user dashboard");
          return;
     }
     role;
}

function neverReturn():never{
     while(true){

     }
}


/**
 Type Assertion (as)
Type assertion is you telling TypeScript: "I know more about this than you do." It doesn't change the data at runtime; it just shifts the compiler's perspective.

HTML Elements: Essential when accessing specific properties like .value on an input, because getElementById only returns a generic HTMLElement.

JSON Parsing: JSON.parse always returns any. Asserting it to a type (like Book) provides autocomplete and safety for the rest of your logic.

Note: Use assertions sparingly. If you assert a variable as a string when it is actually a number, TypeScript won't stop you, but your code will crash at runtime.
 */

/**
 Type never
The never type represents values that should not exist or functions that never finish.

Exhaustiveness Checking: In your redirectBasedOnRole function, if you handle "admin", "user", and "superadmin", the final role variable will be of type never. If you add a new role to the union but forget to update the if statements, TypeScript will throw an error because role is no longer never.

Infinite Loops/Errors: Functions that throw an error or have an infinite while(true) loop return never.
*/