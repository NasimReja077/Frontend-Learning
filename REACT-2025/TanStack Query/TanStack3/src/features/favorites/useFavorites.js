import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getFavorites, addFavorite, removeFavorite } from '../../api/favoriteApi'

export const useFavorites = () => {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['favorites'],
    queryFn: getFavorites,
  })

  // ✅ OPTIMISTIC ADD
  const addMutation = useMutation({
    mutationFn: addFavorite,

    // 1. Before the mutation fires — update cache instantly
    onMutate: async (newChar) => {
      await queryClient.cancelQueries({ queryKey: ['favorites'] })
      const previous = queryClient.getQueryData(['favorites'])

      queryClient.setQueryData(['favorites'], (old = []) => {
        if (old.find(f => f.id === newChar.id)) return old
        return [...old, newChar]
      })

      return { previous } // 2. Store snapshot for rollback
    },

    // 3. If mutation fails → rollback to snapshot
    onError: (_err, _char, context) => {
      queryClient.setQueryData(['favorites'], context.previous)
    },

    // 4. Always sync with server after settle
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
    },
  })

  // ✅ OPTIMISTIC REMOVE
  const deleteMutation = useMutation({
    mutationFn: removeFavorite,

    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['favorites'] })
      const previous = queryClient.getQueryData(['favorites'])

      queryClient.setQueryData(['favorites'], (old = []) =>
        old.filter(f => f.id !== id)
      )

      return { previous }
    },

    onError: (_err, _id, context) => {
      queryClient.setQueryData(['favorites'], context.previous)
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
    },
  })

  return {
    favorites: data || [],
    addFavorite: addMutation.mutate,
    removeFavorite: deleteMutation.mutate,
    isAdding: addMutation.isPending,
    isRemoving: deleteMutation.isPending,
  }
}