import { useState } from 'react'
import './App.css'
import Juego from './componentes/Juego'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Juego/>
    </div>
  )
}

export default App
