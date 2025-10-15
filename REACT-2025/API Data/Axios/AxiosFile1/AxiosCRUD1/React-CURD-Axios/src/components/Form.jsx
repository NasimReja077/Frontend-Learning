import { useState } from "react"
import { postData } from "../api/PostApi";

export const Form = ({ data, setData }) => {
     const [addData, setAddData] = useState({
          title:"",
          body:""
     })
     const handleInputChange = (e) =>{
          const name = e.target.name;
          const value = e.target.value;

          setAddData((prev)=>{
               // console.log(prev)
               return{
                    ...prev, // not use extra data use exgisting data dynamic way updating
                    [name]: value,
               };
          });
     };

     const addPostData = async () =>{
          const res = await postData(addData) // accept paramiter
          console.log("res",res);
          
          if((res.status === 201)){
               setData([...data,res.data]); // adding data
               setAddData({ title: "", body: ""}) // remove old input data
          }
     };

     const handleFormSubmit = (e) => {
          e.preventDefault();
          addPostData()
     }
     return(
          <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 p-4 bg-gray-900 rounded-2xl shadow-lg">
               <div className="flex flex-col w-full sm:w-1/3">
                    <label htmlFor="title" className="text-sm text-gray-400 mb-1">Title</label>
                    <input 
                    type="text"
                    autoComplete="off"
                    id="title"
                    name="title"
                    placeholder="Add Title"
                    value={addData.title}
                    onChange={handleInputChange}
                    className="w-full text-gray-800 px-4 py-2 border-2 border-gray-700 rounded-xl outline-none focus:border-amber-400 transition"
        />
               </div>
               <div className="flex flex-col w-full sm:w-1/3">
                    <label htmlFor="body" className="text-sm text-gray-400 mb-1">Post</label>
                    <input 
                    type="text"
                    autoComplete="off"
                    id="body"
                    name="body"
                    placeholder="Add Post......"
                     value={addData.body}
                    onChange={handleInputChange}
                    className="w-full text-gray-800 px-4 py-2 border-2 border-gray-700 rounded-xl outline-none focus:border-amber-400 transition"
                    />
               </div>
               <button type="submit" 
               className="bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold px-6 py-2 rounded-xl shadow-md transition">Add</button>
          </form>
     )
}