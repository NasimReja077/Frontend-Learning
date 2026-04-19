import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { toggleTheme } = useTheme()

  return (
    <nav className="bg-orange-600 dark:bg-gray-950 text-white py-6 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🐉</div>
          <h1 className="text-4xl font-black tracking-tighter">Dragon Ball Explorer</h1>
        </div>

        <button
          onClick={toggleTheme}
          className="p-3 hover:bg-white/20 rounded-2xl transition-colors"
        >
          <Sun className="w-6 h-6 hidden dark:block" />
          <Moon className="w-6 h-6 dark:hidden" />
        </button>
      </div>
    </nav>
  )
}