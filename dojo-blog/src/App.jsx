import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Blogs from './Blogs'

function App() {

  const title = 'Hi'

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Blogs />
      </div>
    </div>
  )
}

export default App
