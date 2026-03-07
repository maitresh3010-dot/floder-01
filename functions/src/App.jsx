import React from 'react'

const App = () => {
  // function btnclick(){
  //   console.log("btn is clicked")
  // }
  // function mouseover(){
  //   console.log("mouse  is over")
  // }

  const paperScrolling = ()=>{
    console.log("scrolling")
  }
  return (
    <div onWheel={paperScrolling}>
      {/* <button  onMouseEnter={mouseover}  onClick={btnclick}>click here</button>
      <input type="text" placeholder='enter the name'  onChange={function inputchnage(elem){
        console.log(elem.target.value)
      }}></input> */}

        {/* <div   onMouseMove={(elem)=>{
          console.log(elem)
        }} className='box'>

        </div> */}
        <div className='p1'></div>
        <div className='p2'></div>
        <div className='p3'></div>
    </div>
  )
}

export default App
