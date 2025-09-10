import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Nasim",
    age: 21
  }
  let newArr = [1, 2, 3, 4, 5]
  return (
    <>
    <h1 className='bg-pink-400 text-wite text-3xl font-bold underline p-4 mb-6'>TailwindCss Test Pass</h1>
    <Card usernames="NasimReja" someObject={newArr} btnText="See-Me"/>
    <Card usernames="Samema" btnText="Follow-Me"/>
    </>
  )
}

export default App
