// Movies Card 

import { NavLink } from "react-router-dom";

export const MCard = ({ curMovie }) => {
     const { Poster, imdbID } = curMovie;
     // hear li is use becose ul is use in Movies  
     return(
          <>
          <li className="hero-container">
               <div className="main-container">
                    <div className="poster-container">
                         <img src={Poster} className="poster" alt={imdbID} />
                    </div>
                    <div className="ticket-container">
                         <div className="ticket_content">
                              <NavLink to={`/movies/${imdbID}`}>
                              <button className="ticket_buy_btn">Watch now</button>
                              </NavLink>
                         </div>
                    </div>
               </div>
          </li>
          </>
     )
}