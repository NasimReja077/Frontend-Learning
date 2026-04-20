const KEY = "favorites"

// Simulate an API with localStorage
export const getFavorites = async () => {
  return JSON.parse(localStorage.getItem(KEY)) || []
}

export const addFavorite = async (char) => {
  const current = JSON.parse(localStorage.getItem(KEY)) || [] // explanation: get the current list of favorites from localStorage, if it doesn't exist, use an empty array

  const exists = current.find(item => item.id === char.id) // explanation: check if the character to be added already exists in the current list of favorites by comparing their ids
  if (exists) return current

  const updated = [...current, char] // explanation: create a new array that includes all the current favorites plus the new character to be added
  localStorage.setItem(KEY, JSON.stringify(updated)) // explanation: update the localStorage with the new list of favorites by converting the updated array to a JSON string and storing it under the same key

  return updated
}

export const removeFavorite = async (id) => {
  const current = JSON.parse(localStorage.getItem(KEY)) || []

  const updated = current.filter(item => item.id !== id)
  localStorage.setItem(KEY, JSON.stringify(updated))

  return updated
}