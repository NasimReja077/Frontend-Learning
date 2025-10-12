// Movies page 
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { MCard } from '../component/Ui/MCard';

export const Movies = () => {
     const moviesData = useLoaderData(); // useLoaderData loder key valu return data feach do not use useEffact 
     console.log(moviesData);
     // ul is use and MCard use li <ul><li/><li/><ul>
     return (
          <>
          <ul className='contaniner grid grid-three-cols'>
               {moviesData && 
               moviesData.Search.map((curMovie) =>{
                    return <MCard key={curMovie.imdbID} curMovie={curMovie}/>;
               })}
          </ul>
          </>
     )
}