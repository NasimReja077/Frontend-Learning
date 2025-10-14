/**
 * filter() → used to remove items from an array -- 
 * It creates a new array that only includes the elements that meet a specific condition.
 * keep all posts except the one with the deleted ID
     → that’s exactly what filter() does best.
 */
/**
 * map() → used to modify or transform items 
 * It creates a new array where each element is changed or transformed, but it doesn’t remove anything.
Example:
const numbers = [1, 2, 3, 4];
const newNumbers = numbers.map(num => num * 2);
console.log(newNumbers); // [2, 4, 6, 8]

map() is great for updating data (like changing a post title),
but not for deleting, because it always returns the same number of items.
 */
/**
 *Using !== is safer and cleaner because it avoids type conversion bugs.
 In your React code, you always want strict equality/inequality to make sure:
     you’re comparing the same type (e.g., both are numbers)
     you don’t get unexpected results due to JavaScript’s automatic type conversion.
 */


/**
* How It Works Now

When user clicks Delete,
→ React calls handleDeletePost(id) with the actual post ID.

Inside handleDeletePost:
It sends a DELETE request to
https://jsonplaceholder.typicode.com/posts/{id}
via your Axios API.

If response status is 200, it filters out the deleted post from the data array using:
data.filter(curPost => curPost.id !== id)

Then updates the state using setData(updatedPosts) to refresh the UI.
The deleted post instantly disappears from the UI ✅
 */

import React, { useEffect, useState } from 'react'
import { deletePost, getPost } from '../api/PostApi'


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

     // function to delete Post
     // Delete a post by ID
     const handleDeletePost = async (id) => {
          // console.log(res);
          try {
               const res = await deletePost(id);
               if(res.status === 200){
                    const newUpdatePosts = data.filter((curPost) => {
                         return curPost.id !== id;
                    });
                    setData(newUpdatePosts);
                    console.log(`Post ${id} deleted Successfully.`);
               }else{
                    console.log("Failed to delete the post:", res.status);
               }
          } catch (error) {
               console.error("Error deleting post:", error);
          }
     };
     
     return (
     <section className="w-[90%] max-w-6xl">
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {data.map((curElem) => {
                    const { id, body, title } = curElem;
                    return (

                         <li key={id}
                         className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-gray-900 dark:text-gray-100">
                              <p className="text-sm text-gray-500 mb-1">Post ID: <span className="font-semibold text-gray-800 dark:text-gray-300">{id}</span></p>
                              <h2 className="text-xl font-semibold mb-2">Title: {title}</h2>
                              <p className="text-sm mb-3">Body: {body}</p>
                              <div className="flex gap-3 mt-4">
                                   <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:scale-95 transition-all duration-200 cursor-pointer">
                                        Edit
                                   </button>
                                   <button className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 active:scale-95 transition-all duration-200 cursor-pointer"
                                   onClick={() => handleDeletePost(id)} // when click the get id for delete
                                   >
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