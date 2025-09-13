import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard.jsx";

const NetFlixSeriesCard = () =>{
  return(
    <ul>
      {/* {seriesData.map((curentCardElem) =>{ // {} then use return 
        return <SeriesCard key={curentCardElem.id} curentCardElem={curentCardElem}/> // curentCardElem={} is propes in component when you enter data then use propes // child componet
      } */}
      {seriesData.map((curentCardElem) =>(  // () not use return 
         <SeriesCard key={curentCardElem.id} data={curentCardElem}/>
      ))}
    </ul>
  );
};

export default NetFlixSeriesCard; 