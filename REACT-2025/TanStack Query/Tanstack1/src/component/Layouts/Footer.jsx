import React from 'react'

const Footer =()=> {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
      <p>
        © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">React.Co.PVT</span> — All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer