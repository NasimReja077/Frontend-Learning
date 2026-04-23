import { Link } from 'react-router-dom'
import { MdFavorite, MdDelete } from 'react-icons/md'
import { useFavorites } from '../features/favorites/useFavorites'

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites()

  // ── Empty state ──
  if (favorites.length === 0) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="text-7xl mb-6 opacity-30">💔</div>
      <h2 className="text-2xl font-bold text-gray-400 mb-2">No favorites yet</h2>
      <p className="text-gray-600 text-sm mb-8">
        Go back and tap the heart on any character to save them here.
      </p>
      <Link
        to="/"
        className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition active:scale-95"
      >
        Browse Characters
      </Link>
    </div>
  )

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">

      {/* ── Header ── */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-red-500/15 border border-red-500/20 rounded-2xl">
          <MdFavorite className="text-red-400 text-2xl" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Your Favorites</h1>
          <p className="text-gray-500 text-sm">{favorites.length} character{favorites.length !== 1 ? 's' : ''} saved</p>
        </div>
      </div>

      {/* ── List ── */}
      <div className="space-y-3">
        {favorites.map((fav, idx) => (
          <div
            key={fav.id}
            className="
              group flex items-center gap-4
              bg-white/3 border border-white/8
              hover:border-orange-500/20 hover:bg-white/5
              rounded-2xl px-4 py-3
              transition-all duration-200
            "
          >
            {/* Rank number */}
            <span className="text-gray-700 text-sm font-mono w-5 text-center shrink-0">
              {idx + 1}
            </span>

            {/* Character image */}
            <div className="w-12 h-12 rounded-xl bg-gray-800/60 overflow-hidden shrink-0 flex items-center justify-center">
              <img
                src={fav.image}
                alt={fav.name}
                className="h-11 w-auto object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <Link
                to={`/character/${fav.id}`}
                className="font-semibold text-white hover:text-orange-300 transition-colors truncate block"
              >
                {fav.name}
              </Link>
              <p className="text-xs text-gray-500 mt-0.5">
                {fav.race} · {fav.gender}
                {fav.affiliation && <> · <span className="text-gray-600">{fav.affiliation}</span></>}
              </p>
            </div>

            {/* Ki badge */}
            {fav.ki && (
              <span className="text-[11px] text-yellow-400 font-semibold bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-full shrink-0 hidden sm:block">
                ⚡ {fav.ki}
              </span>
            )}

            {/* Remove button */}
            <button
              onClick={() => removeFavorite(fav.id)}
              className="
                shrink-0 p-2 rounded-xl
                text-gray-600 hover:text-red-400
                hover:bg-red-500/10 border border-transparent
                hover:border-red-500/20
                transition-all duration-200 active:scale-90
                cursor-pointer
              "
              title="Remove from favorites"
            >
              <MdDelete className="text-lg" />
            </button>
          </div>
        ))}
      </div>

      {/* ── Footer action ── */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="text-sm text-gray-600 hover:text-orange-400 transition-colors"
        >
          ← Back to all characters
        </Link>
      </div>

    </div>
  )
}

export default Favorites