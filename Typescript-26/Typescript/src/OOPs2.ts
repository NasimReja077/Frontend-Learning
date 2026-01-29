// Learning Object-Oriented Programming (OOP) through a Library Management System is a fantastic way to see how these concepts interact in a real-world scenario.

// Classes and Inheritance - 
// A Class is a blueprint, and Inheritance allows a child class to reuse code from a parent class.
     // Base Class: LibraryItem contains common properties like title.
     // Derived Class: Book extends LibraryItem to add specific features like author.

class LibraryItem {
    constructor(public title: string, public id: string) {} // constructor to initialize properties

    getInfo() {
        return `${this.title} (ID: ${this.id})`;
    }
}


class Book extends LibraryItem { // extends keyword for inheritance
    constructor(title: string, id: string, public author: string) {
        super(title, id); // Calls the parent constructor
    }
    // Overriding a method
    getInfo() {
        return `Book: ${this.title} by ${this.author}`;
    }
}

console.log(new Book("1984", "B001", "George Orwell").getInfo()); // Output: Book: 1984 by George Orwell
console.log(new Book("The Great Gatsby", "B002", "F. Scott Fitzgerald").getInfo());
console.log(new Book("To Kill a Mockingbird", "B003", "Harper Lee").getInfo()); 
console.log(new LibraryItem("Encyclopedia", "L001").getInfo()); 

// Access Modifiers & Encapsulation
// Encapsulation hides the internal state of an object and only shows what is necessary.
// They control the visibility of class members.

// Public: Accessible everywhere.
// Private (private or #): Only accessible inside the class. // accessible only within the class
// Protected: Accessible inside the class and its subclasses.

class LibraryMember {
    public name: string;
    private _memberId: string; // Internal ID
    protected membershipLevel: string = "Standard";

    constructor(name: string, id: string) { // parameterized constructor
        this.name = name;
        this._memberId = id;
    }

    getDetails() {
        return `Member: ${this.name}, Level: ${this.membershipLevel}`;
    }
}

console.log(new LibraryMember("Alice", "M001").getDetails()); // Output: Member: Alice, Level: Standard
console.log(new LibraryMember("Bob", "M002").getDetails());
console.log(new LibraryMember("Tesla", "M003").getDetails());

// Getters and Setters - These allow you to add logic (like validation) when reading or writing a property. 
// They provide controlled access to private properties.

// Example: Managing book fines with validation using getters and setters
class BookFine {
    private _amount: number = 0;

    get amount() {
        return `$${this._amount}`;
    }

    set amount(value: number) {
        if (value < 0) throw new Error("Fine cannot be negative!");
        this._amount = value;
    }
}

const myFine = new BookFine();
myFine.amount = 50; // Sets value
console.log(myFine.amount); // Output: "$50"

// Readonly Properties - These properties can only be set during initialization or in the constructor.

// Static Members - Static properties or methods belong to the Class itself, not to a specific instance (object). 
// They are shared across all instances of the class.

class LibraryRules {
    static libraryName = "City Central Library";
    static maxBooksAllowed = 5;

    static getWelcomeMessage() {
        return `Welcome to ${this.libraryName}!`;
    }
}

console.log(LibraryRules.libraryName); // No need to use 'new'
console.log(LibraryRules.getWelcomeMessage()); // Output: Welcome to City Central Library!

// Abstract Classes - An Abstract Class cannot be instantiated directly. It acts as a strict template for other classes.
// It can contain abstract methods that must be implemented by derived classes.
// Example: Media is an abstract class with an abstract method playPreview

abstract class Media {
    abstract playPreview(): void; // Must be implemented by children

    showType() {
        console.log("This is a library media item.");
    }
}

class AudioBook extends Media {
    playPreview() {
        console.log("Playing a 30-second audio clip...");
    }
}

console.log(new AudioBook().playPreview()); // Output: Playing a 30-second audio clip...
console.log(new AudioBook().showType()); // Output: This is a library media item.


// Dependency Injection (DI) - DI is a design pattern where a class receives its dependencies from the outside rather than creating them internally. This makes code easier to test.

// The "Dependency"
class NotificationService {
    send(message: string) {
        console.log(`Sending Notification: ${message}`);
    }
}

// The "Client" that receives the dependency
class LibrarySystem {
    // We inject the service via the constructor
    constructor(private notifier: NotificationService) {}

    checkoutBook(bookTitle: string) {
        console.log(`Checking out ${bookTitle}...`);
        this.notifier.send(`You have borrowed ${bookTitle}`);
    }
}

// Usage
const notifier = new NotificationService();
const system = new LibrarySystem(notifier); // Injecting the dependency
system.checkoutBook("The Alchemist");

console.log("-----");
// Private Fields using # syntax - This is a newer way to declare private fields in TypeScript/JavaScript.
class Wallet {
    #balance: number = 0; // Private field
     deposit(amount: number) {
          if (amount > 0) {
               this.#balance += amount; 
          }
     }
     getBalance() {
          return this.#balance;
     }
}
const myWallet = new Wallet();
myWallet.deposit(100);
console.log(myWallet.getBalance()); // Output: 100

// myWallet.#balance = 500; // Error: Private field '#balance' must be declared in an enclosing class
// The above code demonstrates various OOP concepts in TypeScript through a Library Management System example.



// Polymorphism - Polymorphism allows different classes to be treated as instances of the same parent class through the same method name, but with different behaviors.

// class Media {
//     display() {
//         console.log("Displaying general media...");
//     }
// }

// class Book extends Media {
//     display() {
//         console.log("Showing book cover and summary.");
//     }
// }

// class DVD extends Media {
//     display() {
//         console.log("Playing movie trailer.");
//     }
// }

// Even though they are different types, we can treat them as 'Media'
// const libraryItems: Media[] = [new Book(), new DVD()];
// libraryItems.forEach(item => item.display());


// Interfaces - 

interface IReturnable {
    dueDate: Date;
    calculateLateFee(days: number): number;
}

class Journal implements IReturnable {
    dueDate = new Date();
    
    calculateLateFee(days: number) {
        return days * 2; // Journals have a $2/day fine
    }
}

console.log(new Journal().calculateLateFee(3)); 

// Method Overloading - TypeScript allows you to define multiple signatures for a single method, allowing it to handle different types or numbers of arguments.

class SearchEngine {
    // Signatures
    find(title: string): void;
    find(id: number): void;

    // Implementation
    find(query: any): void {
        if (typeof query === "string") {
            console.log(`Searching for title: ${query}`);
        } else {
            console.log(`Searching for ID: ${query}`);
        }
    }
}
