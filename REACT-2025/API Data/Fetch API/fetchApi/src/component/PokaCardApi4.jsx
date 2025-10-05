import "./Pokemon.css";
import React from 'react'
import { useEffect, useState } from "react"; 

export const PokaCardApi3 =()=>{
     const [apiData, setApiData] = useState(null); // 1st time component render then get apiData is null
     // then fetch api data then update then  apiData data is add 2nd time 
     // how to hendle if(apiData){}
     const API = "https://pokeapi.co/api/v2/pokemon/squirtle"
     const fetchPokemon = () =>{
          fetch(API)
               .then((res) => res.json())
               .then((data) => {
                    setApiData(data);
               })
               .catch((error) => console.log(error));
     }
     useEffect(() => {
          fetchPokemon()
     }, []);
     console.log(apiData); // run 1st

     if(!apiData)
          return(
          <div>
               <h1>Loading....</h1>
          </div>
     );
     // if(apiData){ // when get api data then run 
     return(
          <section className="container">
      <header>
        <h1> Lets Catch Pokémon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={apiData.sprites.other.dream_world.front_default}
              alt={apiData.name}
              className="pokemon-image"
            />
          </figure>
          <h1>{apiData.name}</h1>
          </li>
          </ul>
          </section>
     )
}

