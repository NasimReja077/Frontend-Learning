import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../features/products/pages/Home";
import Create from "../features/products/pages/Create";
import Edit from "../features/products/pages/Edit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
      { path: "edit/:id", element: <Edit /> },
    ],
  },
]);