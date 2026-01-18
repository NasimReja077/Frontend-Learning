/*function makeBeverage(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}

function serveBeverage(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}
*/

// type is a way to create a custom type 
// type - In typescreipt type is used to define a custom type alias.
type BeverageOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeBeverage(order: BeverageOrder) {
  console.log(order);
}
function serveBeverage(order: BeverageOrder) {
  console.log(order);
}

type beverageRecipe = {
     temperature: number;
     brewTime: number;
     waterVolume: number;
     milkVolume: number
     iceVolume: number;
}

class MasalaCola implements beverageRecipe {
     temperature = 20;
     brewTime = 5;
     waterVolume = 300;
     milkVolume = 100;
     iceVolume = 5;
}

interface CupSize {
     size: "small" | "medium" | "large";
}

class Chola implements CupSize {
     size: "small" | "medium" | "large" = "medium";
}

// type Response = {ok: true} | {ok: false}

// class myRes implements Response {
//      ok: boolean = true;
// }

type CoffType = "latte" | "cappuccino" | "espresso" | "americano" | "mocha"; // literal type - is a type that represents a specific set of string values

function orderCoffee(c: CoffType){
     console.log(`You have ordered a ${c}`);
}

type BaseCoffee = {coffeeBeans: number}
type Extra = {milk: number}

type MilkCoffee = BaseCoffee & Extra;

const cup: MilkCoffee = {
     coffeeBeans: 5,
     milk: 1
}

// console.log(cup);
// orderCoffee("latte");

type User = {
     name: string;
     username: string;
     bio?: string; // optional property
}

const user1: User = {name: "Bob", username: "bob123", bio: "I love coffee!"}
const user2: User = {name: "Pol", username: "pol123"}

type StoresConfig = {
     storeName: string;
     storeVersion: number;
     rating: number;
}

const store1: StoresConfig = {
     storeName: "Miko Coffee Shop",
     storeVersion: 3,
     rating: 7.5
}
const store2: StoresConfig = {
     storeName: "The Coffee Bean",
     storeVersion: 5,
     rating: 9.0
}

// store1.storeVersion = 4;
// store2.rating = 9.5;

// console.log(store1);
// console.log(store2);
// console.log(user1);
// console.log(user2);
// console.log(cup);

