 

import React from 'react'

import NetFlixSeriesCard from "./component/NetFlixSeriesCard.jsx" ;
// import "./component/Nexflixcss.css";
import style from "./component/Nexflix.module.css";

export const App = () => {
  return (
    // <section className='container'>
    //   <h1 className='card-heading'>List of Best Netflix Series</h1> 
    //   <NetFlixSeriesCard />
    // </section>

    <section className='container'>
      <h1 className={style["card-heading"]}>List of Best Netflix Series</h1> 
      <NetFlixSeriesCard />
    </section>
    )
}
