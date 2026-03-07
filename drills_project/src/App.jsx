import React from 'react'
import Cards from './component/cards'


const App = () => {
  const user = 'MAITRESH'
  const age= 16
  return (
    <div className='parent'>

      <div className="card">
        <h1>maitresh uke {user}</h1>
        <h3>age is {age}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sunt!</p>
        <button>vivwe profile</button>

      </div>
        <Cards />
    </div>
  )
}

export default App
