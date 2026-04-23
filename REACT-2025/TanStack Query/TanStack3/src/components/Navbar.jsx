import { Link, useLocation } from 'react-router-dom'
import { MdHome, MdFavorite } from 'react-icons/md'
import { SiDragonframe } from 'react-icons/si'
import { useFavorites } from '../features/favorites/useFavorites'

const Navbar = () => {
  const { pathname } = useLocation()
  const { favorites } = useFavorites()

  const navItem = (to, label, Icon, badge) => {
    const active = pathname === to
    return (
      <Link
        to={to}
        className={`
          relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
          transition-all duration-200 cursor-pointer
          ${active
            ? 'bg-linear-to-r from-yellow-400 to-orange-500 text-black shadow-lg shadow-orange-500/25 scale-105'
            : 'text-gray-400 hover:text-white hover:bg-white/5'
          }
        `}
      >
        <Icon size={18} />
        <span className="hidden sm:inline">{label}</span>
        {badge > 0 && (
          <span className={`
            absolute -top-1.5 -right-1.5
            min-w-4.5 h-4.5 px-1
            flex items-center justify-center
            text-[10px] font-bold rounded-full
            ${active ? 'bg-black/30 text-white' : 'bg-red-500 text-white'}
          `}>
            {badge}
          </span>
        )}
      </Link>
    )
  }

  return (
    <nav className="
      sticky top-0 z-50
      backdrop-blur-xl bg-[#020617]/85
      border-b border-white/8
      px-6 py-3
      flex justify-between items-center
    ">

      {/* ── Logo ── */}
      <Link to="/" className="relative flex items-center gap-2.5 group">
        {/* glow */}
        <span className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 bg-linear-to-r from-yellow-400 to-orange-500 transition-opacity duration-500" />

        <SiDragonframe className="relative z-10 text-orange-400 text-xl drop-shadow-[0_0_8px_rgba(255,165,0,0.6)]" />

        <span className="relative z-10 text-xl font-extrabold bg-linear-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent tracking-wide">
          DRAGON BALL
        </span>

        <span className="relative z-10 text-yellow-400 font-black text-xl animate-pulse">
          Z
        </span>
      </Link>

      {/* ── Nav links ── */}
      <div className="flex items-center gap-2">
        {navItem('/', 'Home', MdHome, 0)}
        {navItem('/favorites', 'Favorites', MdFavorite, favorites.length)}
      </div>

    </nav>
  )
}

export default Navbar