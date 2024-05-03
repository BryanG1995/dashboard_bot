import { useContext, useState } from 'react'
import { ActivateProvider } from './context/ActivateContext';

import reactLogo from './assets/react.svg'
// import './App.css'

import { Container } from './components/Container';


function App() {

  return (
    <ActivateProvider>
      <Container />
    
    </ActivateProvider>
  )
}

export default App
