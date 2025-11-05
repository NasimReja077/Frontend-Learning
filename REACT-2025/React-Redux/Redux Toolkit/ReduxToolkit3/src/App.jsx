import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
            {
              path: '/',
              element: <Home />,
            },
            {
              path: '/cart',
              element: <Cart />,
            },
          ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
