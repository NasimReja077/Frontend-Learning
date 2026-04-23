import { useContext, useEffect, useRef } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { useCharacters } from '../../api/animeApi'
import Card from '../../components/Card'
import CardSkeleton from '../../components/CardSkeleton'

const Characters = () => {
  const { search, setSearch } = useContext(SearchContext)
  const loadMoreRef = useRef(null)

  const {
    data,
    isLoading,
    isError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCharacters()

  // ── Intersection Observer for infinite scroll ──
  useEffect(() => {
    const el = loadMoreRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && hasNextPage) fetchNextPage() },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage])

  // ── Flatten all pages ──
  const allChars = data?.pages?.flatMap(page => page.characters) || []
  //   const allChars = data?.pages
  // ? data.pages.reduce((acc, page) => [...acc, ...(page.characters || [])], [])
  // : []

  // ── Client-side search filter ──
  const filtered = search
    ? allChars.filter(c => c.name?.toLowerCase().includes(search.toLowerCase()))
    : allChars

  // ── Error state ──
  if (isError) return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <p className="text-6xl mb-4">💥</p>
      <p className="text-xl font-bold text-red-400 mb-2">Failed to load characters</p>
      <p className="text-gray-500 text-sm mb-6">The Dragon Ball API might be down. Try again.</p>
      <button
        onClick={() => refetch()}
        className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition active:scale-95"
      >
        ↺ Retry
      </button>
    </div>
  )

  return (
    <div>

      {/* ── Search bar ── */}
      <div className="relative mb-8">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">🔍</span>
        <input
          className="
            w-full pl-11 pr-4 py-3.5 rounded-2xl
            bg-white/5 border border-white/10
            focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/30
            placeholder-gray-600 text-white text-sm
            transition-all duration-200
          "
          placeholder="Search characters — Goku, Vegeta, Frieza..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition"
          >✕</button>
        )}
      </div>

      {/* ── Results count ── */}
      {!isLoading && (
        <p className="text-xs text-gray-600 mb-4">
          Showing <span className="text-gray-400 font-semibold">{filtered.length}</span> characters
          {search && <> for "<span className="text-orange-400">{search}</span>"</>}
        </p>
      )}

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* Initial loading skeletons */}
        {isLoading && Array.from({ length: 12 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}

        {/* Character cards */}
        {!isLoading && filtered.map(char => (
          <Card key={char.id} character={char} />
        ))}

        {/* Fetching-next-page skeletons */}
        {isFetchingNextPage && Array.from({ length: 4 }).map((_, i) => (
          <CardSkeleton key={`next-${i}`} />
        ))}
      </div>

      {/* ── Infinite scroll sentinel ── */}
      {!search && (
        <div ref={loadMoreRef} className="py-10 flex justify-center">
          {hasNextPage
            ? <span className="text-gray-700 text-sm animate-pulse">Loading more...</span>
            : !isLoading && (
              <p className="text-gray-700 text-sm">
                🐉 You've seen all <span className="text-gray-500">{allChars.length}</span> characters
              </p>
            )
          }
        </div>
      )}

    </div>
  )
}

export default Characters