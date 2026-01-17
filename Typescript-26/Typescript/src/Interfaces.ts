// Interfaces in TypeScript -> Optional Properties
// interfaces can have optional properties that may or may not be present in an object.
// Optional properties are denoted by a question mark (?) after the property name.
// This is useful when you want to describe objects that can have varying shapes.

interface SquareConfig {
  color?: string;
  width?: number;
}
 
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
 
let mySquare = createSquare({ colour: "red", width: 100 });
console.log(mySquare); // Output: { color: 'red', area: 10000 }

// In the example above, the SquareConfig interface has two optional properties: color and width. 
// The createSquare function takes a SquareConfig object and returns an object with color and area properties.
// When calling createSquare, we can provide an object that may or may not include color and width.
// If they are not provided, default values are used in the function implementation.
// Note: In the example, there is a typo in the property name "colour". It should be "color" to match the interface definition.
