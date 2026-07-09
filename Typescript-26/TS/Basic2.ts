// Interfaces & Type Aliases

interface User {
  id: number;
  name: string;
  email?: string;        // optional
  readonly createdAt: Date;
}

type User2 = {
  id: number;
  name: string;
};

// Extending
interface Admin extends User {
  role: "admin";
}