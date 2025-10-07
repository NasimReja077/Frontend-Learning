import React, { useEffect, useState } from 'react'
import "./index.css"
import { PokemonCards } from './component/PokemonCards.jsx';

export const Pokemon = ()=>{
  const [pokemon,setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // null === no error 
  const [search, setSearch] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=36"

  const fetchPokemon = async() => {
    try {
      const res = await fetch(API); // API is argument // fetch alase return promise
      const data = await res.json();
      // console.log(data)

      // Declare the variable properly
      const allDetailedPokemonData = data.results.map( async (curPokemon) => {
        // console.log(curPokemon.url)
        const res = await fetch(curPokemon.url)
        const data = await res.json();
        console.log(data)
        return data;
      });
      // console.log(allDetailedPokemonData);

      // Wait for all promises to resolve
      const detailedResponses = await Promise.all(allDetailedPokemonData);
      console.log(detailedResponses);
      // Set the fetched data
      setPokemon(detailedResponses);
      setLoading(false);
    } catch (error) {
      console.log(error);
      console.error("Error fetching Pokemon:",error);
      setLoading(false);
      setError(error);
    }
  }
  useEffect(() => {
    fetchPokemon();
  },[]);
  
  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
);

  if(loading){
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  if(error){
    return(
      <div>
        <h1>{error.message}</h1>
      </div>
    )
  }

  return(
    <>
    <section className='container'>
      <header>
        <h1>Let`s Catch Pokemon</h1>
      </header>
      <div className='pokemon-search'>
        <input type='text' placeholder='search Pokemon...' value={search} onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <div>
        <ul className='cards'>
          {searchData.length > 0 ? (
            searchData.map((curPokemon) => (
            <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
          ))
          ):( <h2>No Pokemon Data Found 😢</h2>)}
        </ul>
      </div>
    </section>
    </>
  )
}


//<div>
        //<ul className='cards'>
          //{/* {pokemon.map((curPokemon) => { */}
          //{searchData.map((curPokemon) => {
            // return <li key={curPokemon.id}>{curPokemon.name}</li>
           // return(
              //<PokemonCards key={curPokemon.id} pokemonData={curPokemon} /> 
            //)
          //})}
        //</ul>
      //</div>

