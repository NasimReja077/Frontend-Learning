import { useState } from "react";
import { useAddUserMutation } from "../features/api/apiSlice";

export const UserForm =()=> {
  const  [formData, setFormData] = useState({name: "", email: ""});
  const [addUser] = useAddUserMutation();

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    await addUser(formData)
    setFormData({name: "", email: ""}); // reset
    alert("User Added successfully");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Enter Your Name" value={formData.name} 
      onChange={handleChange} />
      <br />
      <br />
      <input name="email" type="email" placeholder="Enter your email" value={formData.email} 
      onChange={handleChange} />
      <br /><br />
      <button type="submit">Submit</button>

      
    </form>
  )
} 


// control fome component data post api data handle