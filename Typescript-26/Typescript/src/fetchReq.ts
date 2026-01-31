import axios from "axios";
import type { AxiosError } from "axios";

// Define a TypeScript interface for the Todo it
interface Todo {
     userId: number;
     id: number;
     title: string;
     completed: boolean;
}

const fetchData = async() => {
     try {
  const response = await fetch(
     "https://jsonplaceholder.typicode.com/todos/1"
  )
  const data = await response.json();
  console.log("Todo", data);
} catch (error: any) {
     if (axios.isAxiosError(error)){
          console.log("Axios error message: ", error.message);
          if (error.response){
               console.log("Axios error response: ", error.response.data);
               console.log("Axios error status: ", error.response.status);
               console.log("Axios error headers: ", error.response.headers);
          }
     }
}
}