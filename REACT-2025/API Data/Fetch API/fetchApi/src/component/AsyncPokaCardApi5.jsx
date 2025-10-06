// Using Async Await & Try Catch to Fetch Pokémon API
import "./Pokemon.css";
import React from 'react'
import { useEffect, useState } from "react"; 

export const AsyncPokaCardApi5 = () =>{
     const [apiData, setApiData] = useState(null);
     const [loading, setLoading] = useState(true); // when we get data then loading flase
     const [error, setError] = useState(null)
     const API = "https://pokeapi.co/api/v2/pokemon/charizard"
     const fetchPokemon = async () =>{
         try {
          const res = await fetch(API);
          const data = await res.json();
          setApiData(data);
          setLoading(false);
         } catch (error) {
          console.log(error);
          setError(error);
          setLoading(false);
         }
     }
     useEffect(() => {
          fetchPokemon()
     }, []);
     console.log(apiData); // run 1st

     if(loading) // jotokon react app load horaha then display <h1>Loading....</h1>
          return(
          <div>
               <h1>Loading....</h1>
          </div>
     );

     if(error)
          return(
          <div>
               <h1>Error: {error.message}</h1> 
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
          <div className="grid-three-cols">
            <p className="pokemon-info">
              Height: <span> {apiData.height} </span>
            </p>
            <p className="pokemon-info">
              Weight: <span> {apiData.weight}</span>
            </p>
            <p className="pokemon-info">
              speed: <span>{apiData.stats[5].base_stat}</span>
            </p>
            <p className="pokemon-info">
              <strong>Attack:</strong> {apiData.stats[1].base_stat}
            </p>
            <p className="pokemon-info">
              <strong>Defense:</strong> {apiData.stats[2].base_stat}
            </p>
            <p>
              <strong>Abilities:</strong>{" "}
              {apiData.abilities.map((ab) => ab.ability.name).join(", ")}
            </p>
            </div>
          </li>
          </ul>
          </section>
     )
}

