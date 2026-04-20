import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getFavorites, addFavorite, removeFavorite } from '../../api/favoriteApi'

// this hook will manage the favorites state and mutations
export const useFavorites = () => {
  const queryClient = useQueryClient()

  const { data } = useQuery({ // explanation: we use useQuery to fetch the favorites from the server. We pass an object with queryKey and queryFn. The queryKey is ['favorites'] which is a unique key for this query. The queryFn is getFavorites which is the function that will be called to fetch the data. It should return a promise.
    queryKey: ['favorites'], // this is the unique key for this query. It can be any string or array that uniquely identifies this query. We will use this key to access the data and manage the cache.

    queryFn: getFavorites // this is the function that will be called to fetch the data. It should return a promise. In our case, we will use the getFavorites function that we defined in our api folder.
  })

  const addMutation = useMutation({ // explanation: we use useMutation to create a mutation for adding a favorite. We pass an object with mutationFn and onSuccess. The mutationFn is addFavorite which is the function that will be called to perform the mutation. It should return a promise. The onSuccess is a callback that will be called when the mutation is successful. In this case, we will invalidate the favorites query to refetch the data and update the UI.
    mutationFn: addFavorite, // this is the function that will be called to perform the mutation. It should return a promise. In our case, we will use the addFavorite function that we defined in our api folder.
    onSuccess: () => { // this is a callback that will be called when the mutation is successful. In this case, we will invalidate the favorites query to refetch the data and update the UI.
      queryClient.invalidateQueries({ queryKey: ['favorites'] }) // this will invalidate the favorites query and trigger a refetch. We pass an object with queryKey to specify which query to invalidate. In this case, we want to invalidate the ['favorites'] query.
    }
  })

  const deleteMutation = useMutation({
    mutationFn: removeFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
    }
  })

  return {
    favorites: data || [],
    addFavorite: addMutation.mutate,
    removeFavorite: deleteMutation.mutate
  }
}