// Array - array is a collection of similar types of data, in ts we can define array in multiple ways,
// 1. using type[]
// 2. using Array<type>
// 3. using readonly array
// 4. multi-dimensional array

// 1. using type[] - in this we define the type of array followed by [], this is the most common way to define an array in ts
const chaiFlavours: string[] = ['Masala', "Adrak"]
const chaiPrice: number[] = [10, 20]

// 2. using Array<type> - in this we use the generic array type provided by ts, we pass the type of array as a generic parameter to the Array type, this is less common than the first way
const rating: Array<number> = [4.5, 5.0]

type Chai = {
     name: string;
     price: number;
}
// array of objects using Array<type>
const menu: Chai[] = [
     {name: "Massala", price: 15},
     {name: "Adrak", price: 25},
]

// 3. using readonly array - in this we use the readonly keyword before the type of array, this makes the array immutable, we cannot change the elements of the array after its creation
// trying to change the elements of readonly array will result in a compile time error
const cities: readonly string[] = ["Delhi", "Jaipur"]
// cities.push("Pune")

// 4. multi-dimensional array - in this we define an array of arrays, we can define multi-dimensional arrays using both type[] and Array<type>
const
 table: number[][] = [
     [1, 2, 3],
     [4, 5, 6]
 ]


 // Tuples - tuples are a special type of array that can hold a fixed number of elements of different types, in ts we define tuples using square brackets [] and specifying the type of each element in the tuple, 
 // we can also define optional elements in a tuple using the ? operator
 // 1. defining a tuple
 // 2. optional elements in a tuple
 // 3. readonly tuples
 // 4. named tuples
 // 5. tuple with enum

 // 1. defining a tuple - in this we define a tuple with fixed number of elements and their types
 let chaiTuple: [string, number];
 chaiTuple = ["Masala", 20]
 // chaiTuple = [20, "Masala"]

 // 2. optional elements in a tuple - in this we define a tuple with optional elements using the ? operator
 let userInfo: [string, number, boolean?]
 userInfo = ["hitesh", 100]
 userInfo = ["hitesh", 100, true]

// 3. readonly tuples - in this we define a readonly tuple using the readonly keyword, this makes the tuple immutable, we cannot change the elements of the tuple after its creation, trying to change the elements of readonly tuple will result in a compile time error
 const coords: readonly [number, number] = [40.7128, -74.0060]
//  coords[0] = 41.0

// 4. named tuples - in this we define a tuple with named elements, this makes the code more readable, we can access the elements of the tuple using their names

 const location: readonly [ number, number] = [28.66, 32.22]
 // 5. tuple with enum - in this we define a tuple with enum values, this makes the code more readable and maintainable, we can define the enum separately and use it in the tuple definition, making it easier to update the enum values in one place
 const chaiItems: [name: string, price: number] = ["Massala", 25]

// Enums - enums are a special type that allows us to define a set of named constants, in ts we define enums using the enum keyword, we can define numeric enums, string enums and heterogeneous enums
 // 1. numeric enums
 // 2. string enums
 // 3. heterogeneous enums

    // 1. numeric enums - in this we define an enum with numeric values, by default the first value is 0 and the subsequent values are incremented by 1, we can also assign custom values to the enum members, the subsequent values will be incremented by 1 from the custom value
 enum CupSize {
     SMALL, MEDIUM, LARGE
 }
 const Status {
     PENDING = 100,
     SERVED, // 101
     CANCELLED // 102
 }

 // 2. string enums - in this we define an enum with string values, we need to assign a string value to each enum member, we cannot have auto-incremented values in string enums, we need to assign a value to each member

 enum ChaiType{
     MASALLA = "masala",
     GinGer = "ginger"
 }
 

 // 3. heterogeneous enums - in this we define an enum with both numeric and string values, this is not a common practice but it is allowed in ts, we can define enum members with different types of values
 enum MixedEnum {
     YES = 1,
     NO = "no"
 }
 function makeChai(type: ChaiType){
     console.log(`Making: ${type}`);
 }
 makeChai(ChaiType.GinGer)
//  makeChai("masala")

// Example of heterogeneous enum
enum RandomEnum {
    ID = 1,
    NAME = "Nasim"
}
console.log(RandomEnum.ID);
console.log(RandomEnum.NAME);

// Example of tuple with enum
const enum Sugar {
    LOW = 1,
    MEDIUM = 2, 
    HIGH = 3
}

let t: [string, number] = ["chai", 10]
t.push("extra")
console.log(t);