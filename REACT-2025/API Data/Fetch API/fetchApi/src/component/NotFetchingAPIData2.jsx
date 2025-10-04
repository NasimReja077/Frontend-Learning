import { useEffect, useState } from "react";

export const NotFetchingAPIData2 = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => console.log(error));
  }, []); // array depndancy only one time 

  return (
    <div className="container effect-container">
      <ul>
        data:
        {apiData.map((curData) => {
          return <li key={curData.id}>{curData.title}</li>;
        })}
      </ul>
    </div>
  );
};