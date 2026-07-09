// Basic TypeScript Types

let name: string = "Alice";
let age: number = 25;
let isActive: boolean = true;
let hobbies: string[] = ["reading", "gaming"];
let random: any = "can be anything"; // avoid when possible

// Tuple
let person: [string, number] = ["Bob", 30];

// Enum
enum Role { Admin, User, Guest }
let userRole: Role = Role.Admin;

// Union types
let id: string | number;
id = "abc123";
id = 456;

// Type Aliases
type Point = { x: number; y: number };
let origin: Point = { x: 0, y: 0 };
