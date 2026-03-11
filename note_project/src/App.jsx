
import React, { useState } from 'react'

const App = () => {
   const [title, setTitle ] = useState("")
   const [details , setDetails] = useState("") 
   const [task , setTask ]= useState([])


  const submitedHandler = (e)=>{
   
    e.preventDefault()
    console.log(title,details)
    const copytask =[...task]
   copytask.push({title, details})
   setTask(copytask)
   console.log(copytask)
    setTitle("")
    setDetails("")
  } 
  
  return (
    <div className='h-screen  lg:flex bg-black text-white p-10'>
    
      <form onSubmit={(e)=>{
        submitedHandler(e)
      }} className='flex items-start lg:w-1/2 flex-col gap-4  p-10 ' >
     <h1 className='text-3xl  font-bold'> YOUR NOTES</h1>
        
        
        {/* phle heanding */}
        
          <input type="text"
           placeholder='enter the notes heading'
          className='px-5  w-full border-2 py-2 rounded-2xl outline-none'
          value={title}
          onChange ={(e)=>{
            setTitle(e.target.value)
            }}
          />
        
        
        <input type=
        "text"
          placeholder='write details' 
          className='px-5  w-full  h-32 py-2 flex items-start flex-row border-2  outline-none'
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}/>
         
         
          <button
           className='bg-white text-black px-5 py-3 rounded'>add note</button>
         
          </form>
          
          <div className='  lg:w-1/2  lg:border-l-2 p-10'>
          
          <h1 className='text-3xl  font-bold'> RECENT NOTES</h1>
            <div className='flex flex-wrap gap-5 m-r overflow-auto h-full'>
              {task.map((item, index)=>{
                return <div key={index} className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DP1kKtAOiYhpng0FZaD-3QGR6V8wfMdMsQ&s')] bg-no-repeat bg-cover bg-center text-black p-5 rounded-lg w-80 h-60 gap-1 flex flex-col">
                <h1 className="text-2xl font-bold  leading-snug">{item.title}</h1>
                <p>{item.details}</p>
              </div>
              })}
            </div>
            

          </div>
     
    </div>
  )
}

export default App
