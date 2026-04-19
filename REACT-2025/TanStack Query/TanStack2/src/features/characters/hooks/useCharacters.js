import { useQuery } from '@tanstack/react-query'
import { characterApi } from '../api/characterApi'

export const useCharacters = () => {
  return useQuery({
    queryKey: ['characters'],                    // Topic 3: Query Key
    queryFn: characterApi.getAll,
    staleTime: 1000 * 60 * 10,                   // Data stays fresh for 10 min
  })
}