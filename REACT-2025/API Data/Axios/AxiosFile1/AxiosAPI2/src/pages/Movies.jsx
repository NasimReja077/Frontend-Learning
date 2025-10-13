import { useEffect, useState } from "react";
import { Card } from "../components/Ui/Card";
import { getMovies } from "../services/GetService";

export const Movies = () =>{
     const [data, setData] = useState([]);
     const getMovieData = async () => {
          try {
               const res = await getMovies();
               console.log(res.data.Search)
               setData(res.data.Search);
          } catch (error) {
               console.error("Error message:",error.message);
               console.error("Error status:",error.response.status);
               console.error("Error data:", error.response.data);
          }
     }

     useEffect(() =>{
          getMovieData();
     }, [])
     return (
          <ul>
               {data.map((curElem) => {
                    return <Card key={curElem.imdbID} movieData={curElem}/>
               })}
          </ul>
     )
}