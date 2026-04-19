import { useCharacters } from '../hooks/useCharacters';
import { useToggleFavorite } from '../hooks/useToggleFavorite';
import CharacterCard from '../../../components/CharacterCard';
import Loader from '../../../components/Loader';

export default function CharacterList() {
  const { data: characters, isPending, isError } = useCharacters()
  const toggleFavorite = useToggleFavorite()

  if (isPending) return <Loader />
  
  if (isError) {
    return (
      <div className="text-center py-20 text-red-500 text-xl">
        Failed to load Dragon Ball characters 😢
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {characters?.map((char) => (
        <CharacterCard
          key={char.id}
          character={char}
          onFavorite={(id) => toggleFavorite.mutate(id)}
        />
      ))}
    </div>
  )
}