import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/Ui/Card";

export const Movies = () =>{
     const [data, setData] = useState([]);

     const API = "http://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"

     const getMovieData = async () => {
          try {
               const res = await axios.get(API) // get is methord
               console.log(res.data.Search) // stroe this data 
               setData(res.data.Search);
          } catch (error) {
               console.error("Error message:",error.message);
               console.error("Error status:",error.response.status);
               console.error("Error data:", error.response.data);
          }
     }

     useEffect(() =>{
          getMovieData();
     }, [])// very 1st time page relode axios atomatic feach data
     return (
          <ul>
               {data.map((curElem) => {
                    return <Card key={curElem.imdbID} movieData={curElem}/>
               })}
          </ul>
     )
}