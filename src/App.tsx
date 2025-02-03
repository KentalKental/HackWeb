import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <a>HOME</a>

        <ul>
          <li><a>Create Hackathon |</a></li> 
          <li><a>Join Hackathon |</a></li>
          <li><a>Mentorships</a></li>
        </ul>

        


      </header>
    </>
  )
}

export default App
