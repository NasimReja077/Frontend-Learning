import { Link, useLocation } from "react-router-dom";
import { MdHome, MdFavorite } from "react-icons/md";
import { SiDragonframe } from "react-icons/si";

const Navbar = () => {
  const { pathname } = useLocation();

  const navItem = (to, label, Icon) => {
    const active = pathname === to;

    return (
      <Link
        to={to}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-xl
          transition-all duration-300 cursor-pointer
          ${active
            ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-md scale-105"
            : "text-gray-300 hover:text-yellow-400 hover:bg-white/5"
          }
        `}
      >
        <Icon size={20} />
        {label}
      </Link>
    );
  };

  return (
    <div
      className="
      sticky top-0 z-50
      backdrop-blur-xl bg-[#020617]/80
      border-b border-yellow-500/20
      px-6 py-3
      flex justify-between items-center
    "
    >
      <h1
        className="
  flex items-center gap-2
  text-2xl md:text-3xl font-extrabold tracking-wide
  relative
"
      >
        {/* 🔥 Glow Background */}
        <span className="absolute inset-0 blur-xl opacity-40 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></span>

        {/* TEXT */}
        <span
          className="
    relative z-10
    bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500
    bg-clip-text text-transparent
    drop-shadow-[0_0_12px_rgba(255,140,0,0.8)]
  "
        >
          DRAGON BALL
        </span>

        {/* ⚡ SUPER TEXT */}
        <span
          className="
    relative z-10
    text-yellow-400 font-black
    animate-pulse
  "
        >
          SUPER
        </span>

        {/* 🐉 ICON */}
        <SiDragonframe
          className="
    text-orange-400 text-2xl
    drop-shadow-[0_0_10px_rgba(255,165,0,0.8)]
  "
        />
      </h1>

      {/* 🧭 NAV LINKS */}
      <div className="flex gap-4">
        {navItem("/", "Home", MdHome)}
        {navItem("/favorites", "Favorites", MdFavorite)}
      </div>
    </div>
  );
};

export default Navbar;
