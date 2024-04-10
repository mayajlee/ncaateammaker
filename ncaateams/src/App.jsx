import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{color:"white", padding: "20vh"}}>
            <h1 style={{fontFamily: "Just Another Hand"}}>Do you have what it takes to make an unbeatable team?</h1>
            <p style={{fontSize: "20px"}}>Create teams and compare with your friends!</p>
        </div>
    </>
  )
}

export default App
