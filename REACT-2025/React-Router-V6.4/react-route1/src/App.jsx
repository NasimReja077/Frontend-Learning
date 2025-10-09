import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.jsx"
import { About } from './pages/About.jsx';
import { Movies } from "./pages/Movies.jsx";
import { Contaact } from "./pages/Contact.jsx";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home />
    },
    {
      path: "/about",
      element:<About />
    },
    {
      path: "/movie",
      element:<Movies/>
    },
    {
      path: "/contact",
      element:<Contaact />
    }
  ]);
  return <RouterProvider router={router}/>
};

export default App;
