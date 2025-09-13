 /* eslint-disable no-unused-vars */
 import style from "../component/Nexflix.module.css"; // using module 

  export const SeriesCard = ({data}) =>{
    const {id, img_url, name, rating, description, genre, cast, watch_url} = data;

    const btn_style ={
      padding: "1.2rem 2.45rem", // not use ; use ,
      border: "none",
      fontSize: "1.65rem",
      backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
      color: "var(--white)",
      cursor: "pointer",
      borderRadius: "0.5rem",
    };

    
    const ratingClass = rating >= 8.5 ? style.superHit : style.average;

    return(
    // <li className="card"> // donot using css module 
    <li className={style.card}>  
        <div>
          <img src={img_url} alt={name} />
        </div>
        <div className={style["card-content"]}> 
          {/* <div className={style.cardContent}> best choich camel case  */}
          <h2>Name: {name}</h2>
          <h3>Rating:
            <samp className={`${style.rating} ${ratingClass}`}>{rating}</samp> {/**obj propate then ${} */}
            </h3>
          {/* <p style={{margin: "1.2rem 0"}}>Sumamry:{description}</p> // inline css {{}}// create object and not use ; use , */} 
          <p>Sumamry:{description}</p>
          <p>Genre: {genre.join(", ")}</p>
          <p>Cast: {cast.join(", ")}</p>
          <a href={watch_url} target="_blank" rel="noreferrer"> 
              {/* <button style={{
                padding: "1.2rem 2.45rem", // not use ; use ,
                border: "none",
                fontSize: "1.65rem",
                backgroundColor: "var( --btn-hover-bg-color))",
                color: "var(--bg-color)",
              }}>Watch Now</button> */}

              <button style={btn_style}>Watch Now</button> 
          </a>
        </div>
    </li>
  );
}