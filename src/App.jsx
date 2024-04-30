import { useContext, useState } from 'react'
import { ActivateProvider } from './context/ActivateContext';

import reactLogo from './assets/react.svg'
import './App.css'
import { ButtonActivate } from './components/ButtonActivate';

function App() {

  return (
    <ActivateProvider>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Dashboard</h1>
      <div className="card">
        <p>eres ptito ?</p>

        <ButtonActivate />

      </div>
    </ActivateProvider>
  )
}

export default App
