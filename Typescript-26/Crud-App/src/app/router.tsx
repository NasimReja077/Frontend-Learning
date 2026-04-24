import { createBrowserRouter } from "react-router-dom";
import Home from "../features/products/pages/Home.tsx";
import Create from "../features/products/pages/Create.tsx";
import Edit from "../features/products/pages/Edit.tsx";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/create", element: <Create /> },
  { path: "/edit/:id", element: <Edit /> },
]);