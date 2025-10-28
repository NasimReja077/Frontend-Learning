// API Data Fetching Method 
/**
 * What is useQuery?
useQuery is a React hook that fetches, caches, and updates data automatically for you.
It replaces manual useEffect + useState + fetch() logic.

You just tell it:
What to fetch → queryFn
How to identify the data → queryKey

React Query takes care of:
 Caching
 Loading & error states
 Background refetching
 Data synchronization
 */
import { NavLink } from "react-router-dom";
import { deletPost, fetchPostsData } from "../Api/Api2";
import { 
  keepPreviousData,
  useMutation,
  // useQueries ,
  useQuery, 
  useQueryClient} from "@tanstack/react-query";
import { useState } from "react";
export const FetchRQ =()=> {

  const [pageNumber, setPageNumber] = useState(0);

  const queryClient = useQueryClient();

  // const getPostsData = async ()=> {
  //   try {
  //     const res = await fetchPostsData();
  //     return res.status === 200 ? res.data : [];
  //   } catch (error) {
  //     console.log(error);
  //     return [];
  //   }
  // };


  // const { data, isLoading, isError, error } = useQuery({
  const { data, isPending, isError, error } = useQuery({ // React Query's hook provides isLoading/isFetching/isError/etc.
    //React Query Hook
    queryKey: ["posts", pageNumber], // unique key for caching // like useState
    // queryFn: getPostsData, // like useEffect
    // queryFn: fetchPostsData, // fetch function
    queryFn: ()=>fetchPostsData(pageNumber), // fetch function // pageNumber is argument
    placeholderData: keepPreviousData, // not loding 

    // gcTime: 1000, // Garbage Collection
    // staleTime: 5000, // How long the fetched data is considered “fresh” before it becomes “stale.”
    // refetchInterval: 1000, // Polling // Poll every 5 seconds // In React Query, polling is done automatically using the option: refetchInterval
    // refetchIntervalInBackground: true // Keep polling even in background// when do outher then but background automaic data faching 

  });

  /**
   * When Garbage Collection Happens
   * React Query garbage collects queries when:
   *  The query has no active observers (no components using it)
      The query’s cacheTime expires
   */
  /**
   * What Is Polling?
   Polling means automatically refetching data from the server at regular time intervals — without needing any manual user action (like a refresh or button click).
   
   It’s useful for live-updating UIs, such as:
    Real-time dashboards
    Chat messages
    Stock price tickers
    Notifications or activity feeds
   */

    // Mutation funtion to delete the post
    const deleteMutation = useMutation({
      mutationFn:(id) => deletPost(id),
      onSuccess: (data, id) => {
        // console.log(data, id);
        queryClient.setQueryData(["posts", pageNumber], (curElem) =>{
          return curElem?.filter((post) => post.id !== id);
        });
      },
    });

  // Handle API Loading & Errors Easily with React Query
  if (isPending)
    return <p className="text-center text-blue-500 mt-10 font-black">NEW..Loading...</p>;

  if (isError) 
    return (
      <p className="text-center text-red-500 mt-10 font-black">
        {error.message || "Something went wrong!"}
      </p>
    );

  return (
    <div className="container mx-auto px-6 py-10">

      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        📚 Fetched Posts (NEW Way)
      </h2>
      <ul className="space-y-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((curElem) => {
            const { id, title, body } = curElem;
            return(
            <li key={id} className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100 hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <NavLink to={`/rq/${id}`}>
              <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {title}
              </h2>
              <p className="text-gray-600 text-sm">{body}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-gray-400">ID: {id}</span>
              </div>
              </NavLink>
              <button onClick={() => deleteMutation.mutate(id)} className="mt-3 px-4 py-2 rounded-lg font-semibold bg-green-400 text-white hover:bg-green-700 transition-all duration-200 shadow-md">Delete</button>
            </li>
          );
        })}
        </div>
      </ul>
      {/*Pagination Section */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button 
        disabled={pageNumber === 0 ? true : false} 
        onClick={() => setPageNumber((prev) => prev - 3)}
        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
            pageNumber === 0
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
          }`}
        >Prev</button>
        <p className="text-lg font-semibold text-gray-700">
          Page <span className="text-blue-600">{pageNumber / 3 + 1}</span>
        </p>
        <button 
        onClick={() => setPageNumber((prev) => prev + 3)}
        className="px-4 py-2 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-md"
        >Next</button>
      </div>
    </div>
  )
}
