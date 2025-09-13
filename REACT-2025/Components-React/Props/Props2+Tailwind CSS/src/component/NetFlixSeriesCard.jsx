import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard.jsx";

const NetFlixSeriesCard = () =>{
  return(
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {seriesData.map((curentCardElem) =>(  // () not use return 
         <SeriesCard key={curentCardElem.id} data={curentCardElem}/>
      ))}
    </ul>
  );
};

export default NetFlixSeriesCard; 