import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CharacterDetails from './pages/CharacterDetails'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'
import { SearchProvider } from './context/SearchProvider'

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <div className="min-h-screen bg-linear-to-br from-[#020617] via-[#020617] to-[#0f172a] text-gray-200">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </SearchProvider>
    </BrowserRouter>
  )
}

export default App