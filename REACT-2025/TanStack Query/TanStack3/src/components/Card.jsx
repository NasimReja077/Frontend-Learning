import { Link } from 'react-router-dom'
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import { useFavorites } from '../features/favorites/useFavorites'

const Card = ({ character }) => {
  // Get the favorites state and functions from the custom hook
  const { favorites, addFavorite, removeFavorite } = useFavorites()

  const isFav = favorites.some(f => f.id === character.id)

  return (
    // CARD CONTAINER
    <div className="
      group relative
      bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]
      border border-gray-800
      rounded-3xl overflow-hidden
      shadow-lg
      hover:shadow-orange-500/20
      transition duration-300
      hover:-translate-y-2
      cursor-pointer
    ">

      {/* IMAGE */}
      <div className="h-60 flex items-center justify-center">
        <img
          src={character.image}
          className="h-56 object-contain transition group-hover:scale-110"
        />
      </div>

      <div className="p-4">

        <Link to={`/character/${character.id}`}>
          <h2 className="text-lg font-bold text-white text-center">
            {character.name}
          </h2>
        </Link>

        <p className="text-gray-400 text-sm text-center mt-1">
          {character.race} • {character.gender}
        </p>

        <p className="text-yellow-400 text-xs text-center mt-1">
          Ki: {character.ki}
        </p>

        {/* FAVORITE TOGGLE */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            isFav ? removeFavorite(character.id) : addFavorite(character)
          }}
          className={`
            mt-4 w-full flex items-center justify-center gap-2
            py-2 rounded-xl font-semibold transition cursor-pointer
            ${isFav 
              ? "bg-red-500 text-white hover:bg-red-600" 
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"}
          `}
        >
          {isFav ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
          {isFav ? "Unfavorite" : "Favorite"}
        </button>

      </div>
    </div>
  )
}

export default Card