import { useFavorites } from '../features/favorites/useFavorites'

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites()

  return (
    <div className="space-y-3">
  {favorites.map(fav => (
    <div className="
      flex justify-between items-center
      bg-[#0f172a] border border-gray-800
      p-3 rounded-xl
      hover:bg-[#1e293b]
      transition
    ">

      <span>{fav.name}</span>

      <button
        onClick={() => removeFavorite(fav.id)}
        className="text-red-400 hover:text-red-500 cursor-pointer"
      >
        Remove
      </button>
    </div>
  ))}
</div>
  )
}

export default Favorites