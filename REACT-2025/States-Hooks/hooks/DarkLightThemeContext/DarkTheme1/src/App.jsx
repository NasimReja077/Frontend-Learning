import React from 'react'
import { DarkContextTheme, ThemeProvider } from './component/DarkContextTheme.jsx'

export const App = () => {
  return(
    <>
    <ThemeProvider>
      <DarkContextTheme/>
    </ThemeProvider>
    </>
  )
}