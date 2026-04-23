import axios from 'axios'
import { useInfiniteQuery } from '@tanstack/react-query'

const BASE_URL = 'https://dragonball-api.com/api'

// Fetch all characters with a limit of 52
export const fetchCharacters = async ({ pageParam = 1 }) => {
  const res = await axios.get(`${BASE_URL}/characters?page=${pageParam}&limit=12`)
  return {
    characters: res.data.items,
    nextPage:
      res.data.meta?.currentPage < res.data.meta?.totalPages
        ? res.data.meta.currentPage + 1
        : undefined,
  }
}

export const useCharacters = () => {
  return useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  })
}

// Fetch a single character by ID
export const fetchCharacterById = async (id) => {
  const res = await axios.get(
    `${BASE_URL}/characters/${id}`
  )
  return res.data
}
