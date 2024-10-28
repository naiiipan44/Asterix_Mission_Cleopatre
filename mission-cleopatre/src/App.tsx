// import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

const TestcharacterList = [
  {charName: "Cyrus",
    imgSrc: "./Images/logo3-normal.png",
    charOrigin: "Australia",
    description: "just the best"


  }
]

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Card characterList={TestcharacterList[0]}/>
    </>
  )
}

export default App
