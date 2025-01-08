import React, { useState } from 'react'

const Home = () => {

  var name = 'mario'

  const handleClick = (e) => {
    name = "John"
    console.log(name)
  }

  // const handleClickAgain = (name, e) => {
  //   console.log('hello,' + name, e.target)
  // }

  return (
    <div className='home'>
      <h2>Home</h2>
      <button onClick={handleClick}>Click me</button>
      {name}
    </div>
  )
}

export default Home