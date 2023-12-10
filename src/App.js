import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [count,setcount] = useState(0)
  const Increament = () =>{
    return setcount(count+1)
  }
  const Decreament = () =>{
    return setcount(count-1)
  }
  const Reset = () =>{
    return setcount(0)
  }
  return (
    <>
    <div className='container'>
      <h1>Counter App</h1>
      <p>{count}</p>
      <div className='button'>
      <button onClick={()  => Increament()}>+</button>
      <button onClick={() => Decreament()}>-</button>
      <button onClick={() => Reset()}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default App