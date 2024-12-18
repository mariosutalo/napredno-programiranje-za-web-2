import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log('count values is:', count)

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        increase count
      </button>
      <span>count is {count}</span>
    </div>
  )
}

export default App
