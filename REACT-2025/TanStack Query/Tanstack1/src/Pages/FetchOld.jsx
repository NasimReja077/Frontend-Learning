import { useEffect, useState } from "react"
import { fetchPostsData } from "../Api/Api";

export const FetchOld =()=> {
  // States for loading, error, and posts data
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Fetch posts data function
  const getPostsData = async ()=> {
    try {
      const res = await fetchPostsData();
      // console.log(res);
      // res.status === 200 ? setPosts(res.data) : [];
      if (res.status === 200){
        setPosts(res.data); // set the fetched posts data
        setIsLoading(false); // Turn off loading state
        setIsError(false);
      }
      // setPosts
    } catch (error) {
      console.log("Error fetching posts:", error);
      setIsError(true); // set error state
      setIsLoading(false) // Turn off loading state
      // return [];
    }
  };

  useEffect(() =>{
    getPostsData();
  }, []);

  if (isLoading)
    return <p className="text-center text-blue-500 mt-10 font-black">OLD..Loading...</p>;
  if (isError)
    return (
      <p className="text-center text-red-500 mt-10 font-black">
        Something went wrong!
      </p>
    );

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        📚 Fetched Posts (Old Way)
      </h2>
      <ul className="space-y-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts?.map((curElem) => {
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
