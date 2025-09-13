import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard.jsx";

const NetFlixSeriesCard = () =>{
  return(
    <ul className="grid grid-three-cols">
      {seriesData.map((curentCardElem) =>(  // () not use return 
         <SeriesCard key={curentCardElem.id} data={curentCardElem}/>
      ))}
    </ul>
  );
};

export default NetFlixSeriesCard; 