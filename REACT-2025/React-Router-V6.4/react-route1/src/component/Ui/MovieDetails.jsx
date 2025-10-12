import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
export const MoviesDetails = () =>{
     // const params = useParams(); // reatan obj  // no need in v6
     // console.log(params);
     // feach api retan all data use useLoaderData
     // useLoaderData is funtion
     const movieDatas = useLoaderData();
     console.log(movieDatas);
     const { Actor, Poster, Title, Type, year, plot, boxOffice, imdbID } = movieDatas;
     return (
    <li className="hero-container hero-movie-container">
      <div className="main-container">
        <div className="poster-container">
          <NavLink to="#">
            <img src={Poster} className="poster" alt={Title} />
          </NavLink>
        </div>
        <div className="ticket-container">
          <div className="ticket_content">
            <h4 className="ticket_movie-title">{Title}</h4>
            <p className="ticket_current-price">{Type}</p>
            <p className="ticket_current-price">{year}</p>
            <p className="ticket_current-price">{plot}</p>
            <p className="ticket_current-price">{boxOffice}</p>
            <p className="ticket_current-price">{imdbID}</p>
            <p className="ticket_current-price">{Actor}</p>
            <button className="ticket_buy-btn">Watch now</button>
          </div>
        </div>
      </div>
    </li>
  )
}

