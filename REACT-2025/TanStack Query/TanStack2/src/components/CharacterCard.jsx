import { Heart } from 'lucide-react'

export default function CharacterCard({ character, onFavorite }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img 
          src={character.image} 
          alt={character.name} 
          className="w-full h-64 object-cover"
        />
        <button
          onClick={(e) => { e.stopPropagation(); onFavorite(character.id) }}
          className="absolute top-4 right-4 bg-white dark:bg-gray-900 p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          <Heart 
            className={`w-6 h-6 transition-all ${character.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
          />
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {character.name}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-4 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
            {character.race}
          </span>
          <span className="px-4 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full">
            {character.gender}
          </span>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-5">
          {character.description}
        </p>

        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <div>Ki: <span className="font-mono font-medium">{character.ki}</span></div>
          <div className="text-amber-600 dark:text-amber-400">{character.affiliation}</div>
        </div>
      </div>
    </div>
  )
}