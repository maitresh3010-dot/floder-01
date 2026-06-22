import React, { useEffect, useState } from 'react'

const App = () => {

  const [num,setNum] = useState(0)

  const [num1, setNum1]= useState(100)

  useEffect(() => {
    console.log("use effect  is  running")
  },[num])
  return (
    <div>
eryeyyuuj
      <h1>{num}</h1>
      <h1>the num1 is {num1}</h1>
      <button onClick={()=>{
        setNum(num+1)
        
      }}
       onDoubleClick={()=>{
        setNum1(num1+10)
       }}> click</button>
    </div>
  )
}

export default App
