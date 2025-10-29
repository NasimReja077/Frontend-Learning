import React, { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchScUsers } from '../Api/Api2'
import { useInView } from "react-intersection-observer"
export const InfiniteScroll =()=> {
     const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage } = useInfiniteQuery({
          queryKey: ["users"],
          queryFn: fetchScUsers,
          getNextPageParam: (lastPage, allPages) =>{
               console.log("lastPage", lastPage, allPages);
               // If we got exactly 10 users, then next page exists
               return lastPage.length === 10 ? allPages.length + 1 : undefined;
          },
     });
     console.log(data);
     // Handle Scroll
     // const handleScroll = () => {
     //      const bottom = 
     //      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;

     //      if(bottom && hasNextPage){
     //           fetchNextPage();
     //      }
     // }

     const { ref, inView } = useInView({
          threshold: 1,

     })
     useEffect(() =>{
          if(inView && hasNextPage){
               fetchNextPage();
          }
     },[inView, fetchNextPage,hasNextPage]);
     // useEffect(() =>{
     //      window.addEventListener("scroll", handleScroll);
     //      return () => window.removeEventListener("scroll", handleScroll);
     // }, [hasNextPage]);

     if (status === "loading") return <div className="text-center text-blue-500">Loading...</div>;
     if (status === "error") return <div className="text-center text-red-500">Error fetching data</div>;
     
     return (
     <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-4 text-blue-600 text-center">
               Infinite Scroll with React Query v5
          </h1>
          
          {data?.pages?.map((page, index) => (
               <ul key={index} className='space-y-4'>
                    {page.map((user) => (
                         <li key={user.id}
                         className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg border border-gray-100"
                         >
                         <img src={user.avatar_url}
                         alt={user.login}
                         className="w-12 h-12 rounded-full"
                         />
                         <p className="text-gray-800 font-semibold">{user.login}</p>
                    </li>
               ))}
          </ul>
     ))}
     {/* {isFetchingNextPage && <div>Loading More....</div>} */}
     <div ref={ref} className="text-center mt-6">
        {isFetchingNextPage ? (
          <div className="text-blue-400 font-semibold">Loading More...</div>
        ) : hasNextPage ? (
          <div className="text-gray-500">Scroll down to load more</div>
        ) : (
          <div className="text-gray-500">You’ve reached the end!</div>
        )}
      </div>
    </div>
  )
}