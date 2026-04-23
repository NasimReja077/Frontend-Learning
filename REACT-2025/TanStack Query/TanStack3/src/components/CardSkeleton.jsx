
const CardSkeleton = () => (
  <div className="
    bg-linear-to-br from-[#020617] via-[#0f172a] to-[#1e293b]
    border border-gray-800 rounded-3xl overflow-hidden
    animate-pulse
  ">
    {/* Image placeholder */}
    <div className="h-60 bg-gray-800/60 flex items-center justify-center">
      <div className="w-32 h-40 rounded-2xl bg-gray-700/50" />
    </div>

    <div className="p-4 space-y-3">
      {/* Name */}
      <div className="h-5 bg-gray-700/60 rounded-lg w-3/4 mx-auto" />
      {/* Race • Gender */}
      <div className="h-3 bg-gray-700/40 rounded-lg w-1/2 mx-auto" />
      {/* Ki */}
      <div className="h-3 bg-yellow-900/30 rounded-lg w-1/3 mx-auto" />
      {/* Button */}
      <div className="h-9 bg-gray-800/60 rounded-xl mt-4" />
    </div>
  </div>
)

export default CardSkeleton
