import { useState } from 'react'
import './App.css'
import Show from './components/Show'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Show />
      </div>
      
    </>
  )
}

export default App
