import { useState } from 'react'
import { SearchContext } from './SearchContext'

// it is a provider component that will wrap our app and provide the search state to all components that need it
export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('')

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}
