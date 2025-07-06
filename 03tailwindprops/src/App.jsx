import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const myObj ={
    name : "Santosh",
    age : 24
  }

  return (
    <>
      <h1 className=" bg-green-400 text-5xl font-bold underline">
      TailWind Css
    </h1>
    <Card name ="Santosh" {...myObj}/>
    <Card />
    </>
  )
}

export default App
