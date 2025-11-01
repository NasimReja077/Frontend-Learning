import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, fetchUsers } from "./redux/actions";

const App =()=> {
      // Access state from store
      // The State is the current data or snapshot inside the Redux Store at a particular time.
      // You never modify the state directly — you send actions to reducers to get a new state.
     const count = useSelector((state) => state.counter.count);
     const { loading, users, error } = useSelector((state) => state.userData);
     // Get dispatch function
     // Dispatch - UI sends an action // sends to store
     const dispatch = useDispatch();

  return (
    <div
    style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
     <h1>🧮 Redux Counter + API Fetch (Thunk)</h1>

      {/* Counter Section */}
      <h2>Count: {count}</h2>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => dispatch(increment())}>➕ Increment</button>
        <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
        <button onClick={() => dispatch(reset())}>🔁 Reset</button>
      </div>

      <hr style={{ margin: "40px 0" }} />

      {/* User Section */}
      <h2>👥 Fetch Users</h2>
      <button onClick={() => dispatch(fetchUsers())}>Fetch from API</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px auto",
              width: "300px",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App