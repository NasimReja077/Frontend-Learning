
import { useEffect, useState } from "react"
import { postData, updateData } from "../api/PostApi";

export const Form = ({ data, setData, updatedDataApi, setUpdatedDataApi }) => {
     const [addData, setAddData] = useState({
          title:"",
          body:""
     })

     let isEmpty = Object.keys(updatedDataApi).length === 0;

     // get the updatae Data and add into input field
     useEffect(() =>{
          updatedDataApi && 
          setAddData({
               title: updatedDataApi.title || "",
               body: updatedDataApi.body || "",
          });
     }, [updatedDataApi]);


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
     // updatePostData
     const updatePostData = async () =>{
          try {
               const res = await updateData (updatedDataApi.id , addData);
               console.log(res);
               
               if(res.status === 200){
                    setData((prev) =>{
                         return prev.map((curElem) =>{
                              return curElem.id === res.data.id ? res.data : curElem;
                         })
                    })

                    setAddData({title: "", body: ""});
                    setUpdatedDataApi({});
               }

          } catch (error) {
               console.log(error);
          }
     }

     // form submision
     const handleFormSubmit = (e) => {
          e.preventDefault();
          const action = e.nativeEvent.submitter.value;
          if(action === "Add"){
               addPostData();
          }else if(action === "Edit"){
               updatePostData();
          }
          // addPostData()
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
               <button
               className="bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold px-6 py-2 rounded-xl shadow-md transition" 
               type="submit" 
               value={isEmpty ? "Add" : "Edit"}>{isEmpty ? "ADD" : "Edit" }</button>
          </form>
     )
}
