import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "./features/gitUserSlice";

const App =()=> {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    console.log("state..", state.app);
    return state.app
  });

  if(data.loading){
    return <h2>Loading.....</h2>
  }
  if (data.error != null){
    return <h3>{data.error}</h3>
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub Users with Redux Toolkit</h1>
      <button onClick={() => dispatch(getAllData())}>
        Fetch GitHub Users
      </button>

      <ul style={{ marginTop: "20px" }}>
        {data.users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App