import React from 'react'

const App = () => {
  const handelSubmit = (e) =>{
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        handelSubmit(e)
      }} >
        <input type='text' placeholder='enter the name' name='name' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
