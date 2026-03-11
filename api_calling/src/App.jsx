import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
// const getdata = async ()=>{
//   const response = await fetch ('https://jsonplaceholder.typicode.com/todos/')
//   const data = response.json()
//   console.log(data)
// }

const [state , setState] = useState([])

const getdata = async ()=>{
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
  console.log(response)
  setState(response.state)
}

  return (
    <div>
      <button onClick={getdata}>get data</button>
      <div>
       {state.map(function(elem, indx){
        return <h1>hello {elem},{indx}</h1>
       })}
      </div>
    </div>
  )
}

export default App
