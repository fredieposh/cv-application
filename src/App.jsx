import { useState } from 'react'
import './App.css'
import LeftSide from './components/LeftSide.jsx'
import RightSide from './components/RightSide.jsx'
import sections from './section.js'


function App() {
  const[elementsList, setElementsList] = useState(sections);

  function handleChange(id, e) {
    const objectTochange = {...elementsList[id]};
    objectTochange.innerText = e.target.value;
    setElementsList({...elementsList, [id]:objectTochange})
  } 

  return (
    <>
      <LeftSide 
      elementsList={elementsList}
      handleChange={handleChange}
      />
      <RightSide 
      elementsList={elementsList}
      />
    </>
  )
}

export default App
