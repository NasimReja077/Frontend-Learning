import { useQuery } from '@tanstack/react-query'
import { fetchCharacters } from '../../api/animeApi'

export const useCharacters = () => {
  // ✅ USE TANSTACK QUERY TO FETCH CHARACTERS
  return useQuery({ // note: we can pass an object with queryKey and queryFn instead of two separate arguments. This is the new syntax in TanStack Query v4.
    
    queryKey: ['characters'], // this is the unique key for this query. It can be any string or array that uniquely identifies this query. We will use this key to access the data and manage the cache.

    queryFn: fetchCharacters, // this is the function that will be called to fetch the data. It should return a promise. In our case, we will use the fetchCharacters function that we defined in our api folder.
  })
}