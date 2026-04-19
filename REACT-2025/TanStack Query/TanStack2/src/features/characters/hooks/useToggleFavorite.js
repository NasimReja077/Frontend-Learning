import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useToggleFavorite = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (characterId) => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 400))
      return characterId
    },
    onMutate: async (characterId) => {
      await queryClient.cancelQueries({ queryKey: ['characters'] })

      const previousData = queryClient.getQueryData(['characters'])

      // Optimistic Update (Topic 4)
      queryClient.setQueryData(['characters'], (old) =>
        old?.map(char =>
          char.id === characterId
            ? { ...char, isFavorite: !char.isFavorite }
            : char
        )
      )

      return { previousData }
    },
    onError: (err, characterId, context) => {
      // Rollback on error
      queryClient.setQueryData(['characters'], context?.previousData)
    },
  })
}