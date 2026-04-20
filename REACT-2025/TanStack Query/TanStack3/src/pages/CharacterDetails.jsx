import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchCharacterById } from '../api/animeApi'

const CharacterDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, isLoading, isError } = useQuery({ // it is important to use the new syntax of useQuery with an object, because it allows us to use the enabled option to conditionally fetch the data only when the id is available. This prevents unnecessary API calls and errors when the component first mounts and id is undefined.
    queryKey: ['character', id],
    queryFn: () => fetchCharacterById(id),
    enabled: !!id
  })

  if (isLoading) return <h1 className="text-white">Loading...</h1>
  if (isError) return <h1 className="text-red-500">Error loading character</h1>

  return (
    <div className="p-6">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer"
      >
        ⬅ Back
      </button>

      <div className="
        max-w-md mx-auto
        bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]
        border border-gray-800
        rounded-2xl p-6
        shadow-xl
      ">

        <img src={data.image} className="h-64 mx-auto object-contain" />

        <h1 className="text-3xl font-bold text-center mt-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
          {data.name}
        </h1>

        <div className="mt-4 space-y-2 text-gray-300 text-center">
          <p><span className="text-gray-500">Race:</span> {data.race}</p>
          <p><span className="text-gray-500">Gender:</span> {data.gender}</p>
          <p><span className="text-gray-500">Ki:</span> {data.ki}</p>
          <p><span className="text-gray-500">Max Ki:</span> {data.maxKi}</p>
          <p><span className="text-gray-500">Affiliation:</span> {data.affiliation}</p>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-sm text-center">
          {data.description}
        </p>

      </div>
    </div>
  )
}

export default CharacterDetails