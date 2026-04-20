import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { useCharacters } from './useCharacters'
import { useFavorites } from '../favorites/useFavorites'
import Card from '../../components/Card'

const Characters = () => {
  // ✅ GET SEARCH STATE
  const { search, setSearch } = useContext(SearchContext)
  const { data = [], isLoading } = useCharacters()
  const { addFavorite } = useFavorites()

  if (isLoading) return <h1 className="text-white">Loading...</h1> 

  // ✅ SAFE FILTER -> if name is undefined, it won't break the app
  const filtered = data.filter(char =>
    char.name?.toLowerCase().includes(search.toLowerCase()) // explanation: if char.name exists, convert it to lowercase and check if it includes the search term (also in lowercase). If char.name is undefined, it will be skipped in the filter.
  )

  return (
    <div>
      {/* Search Input */}
      <input
        className="w-full mb-6 px-4 py-3 rounded-xl bg-[#0f172a] border border-gray-700 
                   focus:outline-none focus:ring-2 focus:ring-cyan-500 
                   placeholder-gray-500 text-white transition"
        placeholder="Search characters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* USE FILTERED HERE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(char => (
          <Card key={char.id} character={char} onFav={addFavorite} />
        ))}
      </div>
    </div>
  )
}

export default Characters