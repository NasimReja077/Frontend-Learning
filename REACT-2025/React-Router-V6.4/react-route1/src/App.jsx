import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.jsx"
import { About } from './pages/About.jsx';
import { Movies } from "./pages/Movies.jsx";
import { Contact } from "./pages/Contact.jsx";
import AppLayout from './component/layout/AppLayout.jsx';
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children:[
        {
          path: "/",
          element:<Home />
        },
        {
          path: "/about",
          element:<About />
        },
        {
          path: "/movies",
          element:<Movies/>
        },
        {
          path: "/contact",
          element:<Contact /> 
        }
      ],
    },
  ]);
  return <RouterProvider router={router}/>
};

export default App;