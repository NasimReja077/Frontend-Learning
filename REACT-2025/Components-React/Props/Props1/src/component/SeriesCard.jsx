 /* eslint-disable no-unused-vars */
// export const SeriesCard = (props) =>{
  // const {id, img_url, name, rating, description, genre, cast, watch_url} = props.data
  export const SeriesCard = ({data}) =>{
  // console.log(props); // get carent eliments//props.curentCardElem.carnt eliment
  // Destructuring 
  //  <a href={props.data.watch_url}
  // const { data } = props //   <h2>Name: {data.name}</h2>
  const {id, img_url, name, rating, description, genre, cast, watch_url} = data;
     return(
          <li>
          <div>
            <div>
              <img src={img_url} alt={name} width="20%" height="10%" />
            </div>
            <h2>Name: {name}</h2>
            <h3>Rating:{rating}</h3>
            <p>Sumamry:{description}</p>
            <p>Genre: {genre.join(", ")}</p>
            <p>Cast: {cast.join(", ")}</p>
            <a href={watch_url} target="_blank" rel="noreferrer"> {/** rel="noreferrer" it is */} 
              <button>Watch Now</button>
            </a>
          </div>
        </li>
     )
}