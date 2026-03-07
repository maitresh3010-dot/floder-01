import React from 'react'

function cards  (props)  {
    console.log(props)
  return (
    <div className='parent'>
      <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1761696088078-48497832adf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>MAITRESH UKE</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <button>submit</button>
      </div>
      
    </div>
  )
}

export default cards
