import axios from 'axios'

const BASE_URL = 'https://dragonball-api.com/api'

// Fetch all characters with a limit of 52
export const fetchCharacters = async () => {
  const res = await axios.get(`${BASE_URL}/characters?limit=52`)
  return res.data.items
}

// Fetch a single character by ID
export const fetchCharacterById = async (id) => {
  const res = await axios.get(
    `${BASE_URL}/characters/${id}`
  )
  return res.data
}
