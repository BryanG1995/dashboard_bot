import { useContext, useState } from 'react'
import { ActivateProvider } from './context/ActivateContext';
import { BrowserRouter } from 'react-router-dom';
import reactLogo from './assets/react.svg'
// import './App.css'

import { Container } from './components/Container';
import { AppRouter } from './router/AppRouter';


function App() {

  return (

    <ActivateProvider>

      <BrowserRouter >
        {/* <Container /> */}

        <AppRouter/>

      </BrowserRouter>


    </ActivateProvider>
  )
}

export default App
