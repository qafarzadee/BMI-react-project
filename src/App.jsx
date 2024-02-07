import { useState } from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState(40)
  const [height, setHeight] = useState(140)

  function weightChange(e) {
    const inputWeight = e.target.value
    setWeight(inputWeight)
  }
  function heightChange(e) {
    const inputHeight = e.target.value
    setHeight(inputHeight)
  }
  function total(weight, height) {
    const convertedHeight = height / 100
    return (weight / (convertedHeight * convertedHeight)).toFixed(1)
  };
  return (


    <div className='container'>
      <h1>BMI CALCULATOR</h1>
      <div className='inputs'>
        <p>Weight:{weight} kg</p>
        <input type="range" step={1} min={40} max={220} onChange={weightChange} />

        <p>Height:{height} cm</p>
        <input type="range" step={1} min={140} max={220} onChange={heightChange} />
      </div>
      <div className='total-bmi'>
        <p>Your BMI is</p>
        <p className='total'>{total(weight, height)}</p>
      </div>
    </div>
  )
}

export default App