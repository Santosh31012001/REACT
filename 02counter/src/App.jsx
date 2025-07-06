import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addvalue = () => {
    if (counter >= 0) {
      setCounter(counter + 1)
    }

    // for interview
    
    // setCounter(prevCounter => prevCounter+1);
    // setCounter(prevCounter => prevCounter+1);
    // setCounter(prevCounter => prevCounter+1);
    // setCounter(prevCounter => prevCounter+1);


  }
  const removeValue = () => {
    if (counter >0) {
      setCounter(counter - 1)
    }

  }
  return (
    <>
      <h1>Santosh Learn react</h1>
        <h2>Counter App {counter}</h2>
      <button onClick={addvalue}>add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>remove Value{counter}</button>

    </>
  )
}

export default App
