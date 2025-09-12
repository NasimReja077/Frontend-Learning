/* eslint-disable no-undef */
import seriesData from "../api/seriesData.json";

const NetFlixSeriesCard = () =>{

// export const NetFlixSeriesCard = () =>{  // Name Exports imports // then use {}  // not use then get  error "Not provide an export name "default".
     // but use this "export default NetFlixSeriesCard;"" not use {} 

  return(
    <ul>
      {seriesData.map((curentCardElem) =>{
        return (
        <li key={curentCardElem.id}>
          <div>
            <div>
              <img src={curentCardElem.img_url} alt={curentCardElem.name} width="20%" height="10%" />
            </div>
            <h2>Name: {curentCardElem.name}</h2>
            <h3>Rating:{curentCardElem.rating}</h3>
            <p>Sumamry:{curentCardElem.description}</p>
            <p>Genre: {curentCardElem.genre.join(", ")}</p>
            <p>Cast: {curentCardElem.cast.join(", ")}</p>
            <a href={curentCardElem.watch_url} target="_blank" rel="noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </li>
        );
      })}
    </ul>
  );
};

// export default NetFlixSeriesCard;

// export const Footer = () =>{
//      return <p>CopyRight @RejaTecnology.pvt</p>
// }

// combined export import

export default NetFlixSeriesCard; 

// export const Header = () =>{
//      return <p>Naverber Header</p>
// }

// export const Footer = () =>{
//      return <p>CopyRight @RejaTecnology.pvt</p>
// }
