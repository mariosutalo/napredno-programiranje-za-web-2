import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import BlogList from './BlogList'

function App() {

  const title = 'Hi'

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <BlogList />
      </div>
    </div>
  )
}

export default App
