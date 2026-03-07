import React from 'react'
import { Bookmark } from 'lucide-react'

const cards = (props) => {
  console.log(props.companyName)
  return (
    <div>
       <div className="card">
        <div className="top">
          <img src={props.logo} alt="" />
         
          <button>save <Bookmark  size={12}/></button>
        </div>
        <div className="center">
          <h3>{props.companyName} <span>5 days ago</span></h3>
          <h2> Senior UI/UX  Designer </h2>
          <div>
 
 
            <h4>{props.tag1}</h4>
 
             <h4> {props.tag2}</h4> 
          </div>
          

        </div>
        <div className="bottom">
              <div>
            <h2>{props.pay}</h2>
            <p>{props.location}</p>
            </div>
            <button>Apply now</button></div>
      </div>
    
    </div>
  )
}

export default cards
