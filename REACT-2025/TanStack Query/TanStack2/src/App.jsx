import Navbar from './components/Navbar.jsx'
import CharacterList from './features/characters/components/CharacterList.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4">Z Warriors Archive</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Powered by TanStack Query • Live data • Optimistic favorites • Dark mode
          </p>
        </div>

        <CharacterList />
      </main>
    </div>
  )
}

export default App