import React from 'react'
import Card from './componet/card'
import Navbar from './componet/navbar'

const App = () => {
  return (
    <div>
      <div className='card'>
        <h1>MAITRESH UKE</h1>
        <p>Lorem ipsum dolor sit amet.
        </p>
      </div>
      <Card />
      <Navbar/>
    </div>
  )
}

export default App