import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(false);



  return (
    <>
      <div>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Dashboard</h1>
      <div className="card">
        <p>eres ptito ?</p>
        <button
          onClick={() => setCount((count) => !count)}
          style={{backgroundColor: count ? 'blue' : 'red'}}
        >
          { count ? "si soy" : "no soy" }
        </button>

      </div>
    </>
  )
}

export default App
