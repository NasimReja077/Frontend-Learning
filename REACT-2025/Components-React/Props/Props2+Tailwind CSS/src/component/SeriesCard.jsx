 /* eslint-disable no-unused-vars */

  export const SeriesCard = ({data}) =>{
    const {id, img_url, name, rating, description, genre, cast, watch_url} = data;

    const btnStyle = {
    padding: "0.8rem 1.6rem",
    border: "none",
    fontSize: "1rem",
    backgroundColor: rating >= 8.5 ? "#22c55e" : "#facc15", // green if super hit, yellow otherwise
    color: "white",
    cursor: "pointer",
    borderRadius: "0.5rem",
  };
  
  return(
    
    <li className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">  
        <div>
          <img
  src={img_url}
  alt={name}
  className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-t-xl"
/>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h2 className="text-lg font-bold text-gray-800">Name: {name}</h2>
          <h3 className="text-sm text-gray-600 flex items-center gap-2">
            Rating:
            <samp 
            className={`px-2 py-1 text-white rounded text-xs ${rating >= 8.5 ? "bg-green-500" : "bg-yellow-500"}`}
            >{rating}
            </samp>
            </h3>
          <p className="text-gray-700 text-sm">Sumamry:{description}</p>
          <p className="text-gray-700 text-sm">Genre: {genre.join(", ")}</p>
          <p className="text-gray-700 text-sm">Cast: {cast.join(", ")}</p>
          <a href={watch_url} target="_blank" rel="noreferrer"> 
              <button style={btnStyle}>Watch Now</button> 
          </a>
        </div>
    </li>
  );
}