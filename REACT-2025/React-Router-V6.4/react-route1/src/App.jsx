import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.jsx"
import { About } from './pages/About.jsx';
import { Movies } from "./pages/Movies.jsx";
import { Contact, contactData } from "./pages/Contact.jsx";
import AppLayout from './component/layout/AppLayout.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import { getMoviesData } from './api/GatApiData.jsx';
import { MoviesDetails } from './component/Ui/MovieDetails.jsx';
import { getMoviesDetails } from './api/GetMoviesDetails.jsx';
// import { NotFound } from './pages/NotFound.jsx';
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />, //Layout
      errorElement: <ErrorPage />, // for 404 error page //1st step not using path
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
          element:<Movies/>,
          loader: getMoviesData, // get appi data // Global Loader
        },
        {
          path: "/movies/:moviesID", // Dynamic Routing // use ID
          element:<MoviesDetails/>,
          loader: getMoviesDetails, // Loader
        },
        {
          path: "/contact",
          element:<Contact />, 
          action: contactData, // action is property and contactData is function
        }
        // { // 2nd mathod for error page
        //   path: "*",
        //   element: <NotFound />
        // }
      ],
    },
  ]);
  return <RouterProvider router={router}/>
};

export default App;