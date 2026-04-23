import { Link } from 'react-router-dom'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import { useFavorites } from '../features/favorites/useFavorites'

// Affiliation → badge color map
const affiliationColor = {
  'Z Fighter':     'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Villain':       'bg-red-500/20 text-red-300 border-red-500/30',
  'Namekian Warrior': 'bg-green-500/20 text-green-300 border-green-500/30',
}
const badgeClass = (aff) =>
  affiliationColor[aff] ?? 'bg-gray-700/40 text-gray-400 border-gray-600/30'

const Card = ({ character }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const isFav = favorites.some(f => f.id === character.id)

  return (
    <div className="
      group relative flex flex-col
      bg-linear-to-b from-[#0d1424] to-[#060c18]
      border border-white/5
      rounded-3xl overflow-hidden
      shadow-lg shadow-black/40
      hover:shadow-orange-500/15 hover:border-orange-500/20
      hover:-translate-y-2
      transition-all duration-300
    ">

      {/* ── Glow ring on hover ── */}
      <div className="
        absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
        transition-opacity duration-500
        bg-linear-to-br from-orange-500/5 via-transparent to-yellow-500/5
        pointer-events-none
      " />

      {/* ── Favorite badge (top-right) ── */}
      {isFav && (
        <span className="
          absolute top-3 right-3 z-10
          bg-red-500/90 text-white text-[10px] font-bold
          px-2 py-0.5 rounded-full
          shadow-md shadow-red-900/40
        ">
          ❤ FAV
        </span>
      )}

      {/* ── Image area ── */}
      <div className="
        relative h-56
        flex items-end justify-center
        bg-linear-to-b from-[#111827] to-[#0d1424]
        overflow-hidden
      ">
        {/* subtle radial glow behind character */}
        <div className="
          absolute bottom-0 left-1/2 -translate-x-1/2
          w-40 h-24 rounded-full
          bg-orange-500/10 blur-2xl
          group-hover:bg-orange-500/20 transition-all duration-500
        " />

        <img
          src={character.image}
          alt={character.name}
          className="
            relative z-10
            h-52 w-auto object-contain
            drop-shadow-[0_4px_24px_rgba(251,146,60,0.2)]
            group-hover:scale-110 group-hover:drop-shadow-[0_4px_32px_rgba(251,146,60,0.4)]
            transition-all duration-500
          "
        />
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-4 gap-2">

        {/* Name */}
        <Link to={`/character/${character.id}`}>
          <h2 className="
            text-base font-bold text-center text-white
            hover:text-orange-300 transition-colors
            leading-tight
          ">
            {character.name}
          </h2>
        </Link>

        {/* Race • Gender pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
            {character.race}
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
            {character.gender}
          </span>
        </div>

        {/* Affiliation badge */}
        {character.affiliation && (
          <div className="flex justify-center">
            <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-medium ${badgeClass(character.affiliation)}`}>
              {character.affiliation}
            </span>
          </div>
        )}

        {/* Ki bar */}
        <div className="mt-1 px-1">
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-gray-500">Ki Power</span>
            <span className="text-yellow-400 font-semibold">{character.ki}</span>
          </div>
          <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-yellow-400 to-orange-500 rounded-full"
              style={{ width: `${Math.min(100, (parseInt(character.ki) / 1000000) * 100 || 40)}%` }}
            />
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            isFav ? removeFavorite(character.id) : addFavorite(character)
          }}
          className={`
            w-full flex items-center justify-center gap-2
            py-2.5 rounded-2xl text-sm font-semibold
            transition-all duration-200 active:scale-95 cursor-pointer
            ${isFav
              ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30'
              : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-orange-500/10 hover:text-orange-300 hover:border-orange-500/30'
            }
          `}
        >
          {isFav
            ? <><MdFavorite className="text-base" /> Unfavorite</>
            : <><MdOutlineFavoriteBorder className="text-base" /> Favorite</>
          }
        </button>

      </div>
    </div>
  )
}

export default Card