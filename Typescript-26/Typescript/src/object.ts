const myCoffee = {
     name: "Capuchino",
     price: 30,
     isHot: true
}

// {
//      name: string;
//      price: number;
//      isHot: boolean;
// }

let coffee: {
     name: string;
     price: number;
     isHot: boolean;
}

coffee = {
     name: "Latte",
     price: 25,
     isHot: false
}

type Coffee = {
     name: string;
     price: number;
     ingredients: string[];
     size: "S" | "M" | "L";
}

const coldCoffee: Coffee = {
     name: "Iced Coffee",
     price: 20,
     ingredients: ["Coffee", "Ice", "Milk"],
     size: "M"
}

type Cup = {size: string};
let smallCup Cup = {size: "300ml"}
let bigCup: {size: "500ml", material: "steel"}

smallCup = bigCup; // OK
// bigCup = smallCup; // Error
// TypeScript allows assignment from a larger type to a smaller type (structural typing)

type Brew = {brewTime: number};
const coffee2 = {brewTime: 5, beans: "Arabica"}
const chaiBrew:Brew = coffee2; // OK
// const blackTea:Brew = {beans: "Assam"}; // Error
// Missing property 'brewTime'


type User = {
    username: string;
    password: string;
}

const u: User = {
    username: "nasim",
    password: "123456"
}

type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address;
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

// Partial<Type> makes all properties optional. it is useful for update functions, where you might only want to provide a subset of the properties to update.

const updateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with", updates);
}

updateChai({price: 25})
updateChai({isHot: false})
updateChai({})
// 

type ChaiOrder = {
    name?: string;
    quantity?: number;
}

// Required<Type> makes all properties required. it is useful when you want to ensure that an object has all the necessary properties before processing it.

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placeOrder({
    name: "Masala Chai",
    quantity: 2
})



type Chai2 = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}

// Pick<Type, Keys> constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
type BasicChaiInfo = Pick<Chai2, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}

type ChaiNew = {
     name: string;
     price: number;
     isHot: boolean;
     secretIngredients: string;
};

// Omit<Type, Keys> constructs a type by omitting the set of properties Keys (string literal or union of string literals) from Type.
type PublicChai = Omit<Chai, "secretIngredients">;

