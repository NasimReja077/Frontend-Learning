// rfce
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layoute() {
  return (
   <>
   <Header />
   <Outlet />
   <Footer />
   </>
  )
}

export default Layoute