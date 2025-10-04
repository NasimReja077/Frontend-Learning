import { useState } from "react";

export const NotToFetchAPI = () => {
  const [apiData, setApiData] = useState([]);

  // when use fetch then return promise // for hendel then and catch mathod
  fetch("https://jsonplaceholder.typicode.com/posts") 
  .then((res) => res.json()) // when fetch call all data by res(response) => connvert json data
  // .then((data) => console.log(data)) // get response data 
  .then((data) => {
    // setApiData(data) // infenety loop
  })
  .catch((error) => console.log(error));

  return(
    <div className="container effect-container">
      <ul>data:
        {apiData.map((curData) => {
          return <li key={curData.id}>{curData.post}</li>;
        })}
      </ul>
    </div>
  );
};