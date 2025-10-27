import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom"
import { fetchInvPost } from "../../Api/Api2";

export const FetchRQInfo =()=> {
     const { id } = useParams();
     const { data, isPending, isError, error } = useQuery({
          queryKey: ["post", id],
          queryFn: () => fetchInvPost(id),
     })
     
     if(isPending)
          return <p className="text-center text-blue-500 mt-10 font-black">NEW..Loading...</p>;
     
     if (isError)
          return (
          <p className="text-center text-red-500 mt-10 font-black">
               {error.message || "Something went wrong!"}
          </p>
          );
     return(
          <div className="max-w-4xl mx-auto bg-gray-900 text-gray-100 px-6 py-10">
               <h1 className="text-3xl font-bold text-blue-400 mb-6">
          🧾 Post Details </h1>
          
          <div className="space-y-6">
               <p className="text-lg">
                    <span className="font-semibold text-gray-300">Post ID Numer -</span>{" "}
                    <span className="text-white">{data?.id}</span>
               </p>

               <p className="text-lg">
                    <span className="font-semibold text-gray-300">Title:</span>{" "}
                    <span className="text-blue-300 italic">{data?.title}</span>
               </p>
               <div>
                    <h2 className="text-lg font-semibold text-gray-300 mb-2">Body:</h2>
                    <p className="text-gray-200 leading-relaxed">{data?.body}</p>
               </div>
          </div>
          <div className="mt-10">
               <NavLink to="/rq">
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-md">
               Go Back
               </button>
          </NavLink>
          </div>
     </div>
     )
}