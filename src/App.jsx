import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftSide from './components/LeftSide.jsx'
import RightSide from './components/RightSide.jsx'


function App() {
  return (
    <>
      <LeftSide />
      <RightSide />
    </>
  )
}

export default App
