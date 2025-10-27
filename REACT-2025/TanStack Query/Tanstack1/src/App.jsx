/**
 * What is React Query (TanStack Query)?

React Query helps you fetch, cache, and update data in React apps — without writing manual useEffect, useState, or fetch() logic everywhere.

It manages:

✅ Data fetching

✅ Caching and background refetching

✅ Loading and error states

✅ Automatic updates (when data changes)

⚙️ QueryClient

The “brain” or manager” of React Query.

It stores and controls all your queries, caching behavior, and background fetching logic.

✅ Syntax:
import { QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();


QueryClientProvider

The “Context Provider” that makes the QueryClient available to your entire app.

It’s like React’s Context.Provider — it gives access to React Query features (like useQuery, useMutation, etc.) to all components inside it.

✅ Syntax:
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
const queryClient = new QueryClient();
const Root = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
export default Root;

Now, any component inside <QueryClientProvider> can use hooks like:
useQuery()
useMutation()
useQueryClient()

 */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./component/Layouts/MainLayout";
import { Home } from "./pages/Home";
import { FetchOld } from "./pages/FetchOld";
import { FetchRQ } from "./Pages/FetchRQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld/>,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
    ],
  },
]);

const App = ()=>{
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>;

      <ReactQueryDevtools initialIsOpen={false} />
      
    </QueryClientProvider>
  )
};

export default App