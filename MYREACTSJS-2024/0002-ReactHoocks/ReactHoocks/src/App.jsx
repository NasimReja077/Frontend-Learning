import { useCallback, useEffect, useState } from 'react'
import { createConnection } from './Chat';
import Todos from './Todos';


function ChatRoom({ roomID }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomID);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomID, serverUrl]);

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomID} room!</h1>
    </>
  );

}

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};


function App() {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(0);

  const [roomID, setRoomID] = useState('general');
  const [show, setShow] = useState(false);

  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() =>{
    setTodos((t) => [...t, "New Todo"]);
  },[todos]);


  useEffect(() =>{
    setAdd(() => count*2);
  },[count]);



  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c+1)}>+</button>
      <p>Calculation: {add}</p>
      <br />

      <label>
        Choose the chat room:{' '}
        <select
          value={roomID}
          onChange={e => setRoomID(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomID} />}
      <hr />
      <Todos todos={todos} addTodo={addTodo}/>
    </div>
  )
}

export default App
