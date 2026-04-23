import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { MdFavorite, MdOutlineFavoriteBorder, MdArrowBack } from 'react-icons/md'
import { fetchCharacterById } from '../api/animeApi'
import { useFavorites } from '../features/favorites/useFavorites'

// ── Stat row ──
const Stat = ({ label, value, highlight }) => (
  <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
    <span className="text-gray-500 text-sm">{label}</span>
    <span className={`text-sm font-semibold ${highlight ?? 'text-gray-200'}`}>{value ?? '—'}</span>
  </div>
)

// ── Detail skeleton ──
const DetailSkeleton = () => (
  <div className="max-w-lg mx-auto px-4 py-8 animate-pulse">
    <div className="h-8 w-20 bg-gray-800 rounded-xl mb-8" />
    <div className="rounded-3xl bg-gray-800/40 border border-white/5 overflow-hidden">
      <div className="h-64 bg-gray-800/60" />
      <div className="p-6 space-y-3">
        <div className="h-7 bg-gray-700/60 rounded-lg w-2/3 mx-auto" />
        <div className="h-4 bg-gray-700/30 rounded-lg w-1/2 mx-auto" />
        <div className="mt-6 space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-800/60 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  </div>
)

const CharacterDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { favorites, addFavorite, removeFavorite } = useFavorites()

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterById(id),
    enabled: !!id,
  })

  const isFav = favorites.some(f => f.id === data?.id)

  if (isLoading) return <DetailSkeleton />

  if (isError) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <p className="text-6xl mb-4">💥</p>
      <p className="text-xl font-bold text-red-400 mb-6">Failed to load character</p>
      <div className="flex gap-3">
        <button onClick={() => navigate(-1)} className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl text-sm transition">
          ← Go Back
        </button>
        <button onClick={() => refetch()} className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-semibold transition">
          ↺ Retry
        </button>
      </div>
    </div>
  )

  return (
    <div className="max-w-lg mx-auto px-4 py-8">

      {/* ── Back button ── */}
      <button
        onClick={() => navigate(-1)}
        className="
          flex items-center gap-2 mb-8
          text-gray-500 hover:text-white text-sm
          transition-colors cursor-pointer
        "
      >
        <MdArrowBack className="text-base" />
        Back to characters
      </button>

      {/* ── Card ── */}
      <div className="
        bg-linear-to-b from-[#0d1424] to-[#060c18]
        border border-white/8 rounded-3xl overflow-hidden
        shadow-2xl shadow-black/60
      ">

        {/* ── Hero image section ── */}
        <div className="relative h-72 flex items-end justify-center bg-linear-to-b from-[#111827] to-[#0d1424] overflow-hidden">
          {/* Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-32 bg-orange-500/15 blur-3xl rounded-full" />
          <img
            src={data.image}
            alt={data.name}
            className="relative z-10 h-64 w-auto object-contain drop-shadow-[0_8px_32px_rgba(251,146,60,0.3)]"
          />
        </div>

        {/* ── Content ── */}
        <div className="p-6">

          {/* Name + affiliation */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-extrabold bg-linear-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
              {data.name}
            </h1>
            {data.affiliation && (
              <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300">
                {data.affiliation}
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="bg-white/3 rounded-2xl px-4 mb-6">
            <Stat label="Race"   value={data.race} />
            <Stat label="Gender" value={data.gender} />
            <Stat label="Ki"     value={data.ki}    highlight="text-yellow-400" />
            <Stat label="Max Ki" value={data.maxKi} highlight="text-orange-400" />
          </div>

          {/* Description */}
          {data.description && (
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
              {data.description}
            </p>
          )}

          {/* Favorite button */}
          <button
            onClick={() => isFav ? removeFavorite(data.id) : addFavorite(data)}
            className={`
              mt-6 w-full flex items-center justify-center gap-2
              py-3.5 rounded-2xl text-sm font-bold
              transition-all duration-200 active:scale-95 cursor-pointer
              ${isFav
                ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30'
                : 'bg-linear-to-r from-yellow-400/10 to-orange-500/10 text-orange-300 border border-orange-500/20 hover:border-orange-500/40'
              }
            `}
          >
            {isFav
              ? <><MdFavorite className="text-base" /> Remove from Favorites</>
              : <><MdOutlineFavoriteBorder className="text-base" /> Add to Favorites</>
            }
          </button>

        </div>
      </div>
    </div>
  )
}

export default CharacterDetails