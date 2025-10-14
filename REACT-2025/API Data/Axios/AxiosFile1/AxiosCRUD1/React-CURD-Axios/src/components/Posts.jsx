import React, { useEffect, useState } from 'react'
import { getPost } from '../api/PostApi'


export const Posts = () =>{
     // console.log(getPost());
     const [data, setData] = useState([]);

     const getPostData = async () => {
          const res = await getPost();
          console.log(res.data);
          setData(res.data);
     };
     
     useEffect(() => {
          getPostData();
     }, []);
     
     return (
     <section className="w-[90%] max-w-6xl">
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {data.map((curElem) => {
                    const { id, body, title } = curElem;
                    return (

                         <li key={id}
                         className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-gray-900 dark:text-gray-100">
                              <h2 className="text-xl font-semibold mb-2">{title}</h2>
                              <p className="text-sm mb-3">{body}</p>
                              <div className="flex gap-3 mt-4">
                                   <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:scale-95 transition-all duration-200 cursor-pointer">
                                        Edit
                                   </button>
                                   <button className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 active:scale-95 transition-all duration-200 cursor-pointer">
                                        Delete
                                   </button>
                              </div>
                         </li>
                         );
               })}
          </ol>
    </section>
  )
}