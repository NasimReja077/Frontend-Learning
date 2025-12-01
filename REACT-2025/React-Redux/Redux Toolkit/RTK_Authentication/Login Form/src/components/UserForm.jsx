import { useDispatch, useSelector } from "react-redux";
import { addUser, updateEmail, updateName } from "../features/user/userSlice";

export const UserForm =()=> {
  const dispatch = useDispatch();
  const { name, email, status} = useSelector((state) => state.user);
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addUser({ name, email }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>dispatch(updateName(e.target.value))} />
      <br />
      <br />
      <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>dispatch(updateEmail(e.target.value))} />
      <br /><br />
      <button type="submit">Submit</button>

      {status === "loading" && <p>Submiting...</p>}
      {status === "succeeded" && <p>User Loggedin Successfully</p>}
      {status === "failed" && <p>ERROR!, User Loggedin failed</p>}
    </form>
  )
} 


// control fome component data post api data handle