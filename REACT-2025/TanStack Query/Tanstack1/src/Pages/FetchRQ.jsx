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
import { fetchPostsData } from "../Api/Api2";
import { 
  // useQueries ,
  useQuery } from "@tanstack/react-query";
export const FetchRQ =()=> {

  // const getPostsData = async ()=> {
  //   try {
  //     const res = await fetchPostsData();
  //     return res.status === 200 ? res.data : [];
  //   } catch (error) {
  //     console.log(error);
  //     return [];
  //   }
  // };


  const { data } = useQuery({
    //React Query Hook
    queryKey: ["posts"], // unique key for caching // like useState
    // queryFn: getPostsData, // like useEffect
    queryFn: fetchPostsData, // fetch function
  });

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        📚 Fetched Posts (Old Way)
      </h2>
      <ul className="space-y-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return(
            <li key={id}   className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100 hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {title}
                </h2>
              <p className="text-gray-600 text-sm">{body}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-400">ID: {id}</span>
                </div>
            </li>
          );
        })}
        </div>
      </ul>
    </div>
  )
}
