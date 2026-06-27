import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Logotipo from './supplies/logo.jsx'
import Containers from './supplies/containers.jsx'
import './App.css'

function App() {
  return (
    <>
      <Logotipo />
      <div className="cards-row">
        <Containers className="containerH" />
        <Containers className="containerH" />
        <Containers className="containerH" />
      </div>
    </>
  )
}

export default App
