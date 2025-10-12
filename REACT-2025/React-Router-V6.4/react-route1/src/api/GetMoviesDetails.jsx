// import { useParams } from "react-router-dom";

export const getMoviesDetails = async ({params}) => {
     // const params = useParams();
     // console.log(params);
     // in function not define hook
     // all hook are call in react component // in funtion not posibal
     // overcome this problem using {params} in obj
     console.log(params);
     const id = params.moviesID;
     try {
          const response = await fetch(
               `http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
          );
          const data = response.json();
          return data;
     } catch (error) {
          console.log(error)
     }
}
