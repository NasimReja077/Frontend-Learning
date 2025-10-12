import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.jsx"
import { About } from './pages/About.jsx';
import { Movies } from "./pages/Movies.jsx";
import { Contact } from "./pages/Contact.jsx";
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
      element: <AppLayout />,
      errorElement: <ErrorPage />, // for 404 error page
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
          loader: getMoviesData, // get appi data
        },
        {
          path: "/movies/:moviesID", // Dynamic Routing
          element:<MoviesDetails/>,
          loader: getMoviesDetails,
        },
        {
          path: "/contact",
          element:<Contact /> 
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