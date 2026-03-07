import React from 'react'

const users = () => {

    const arr =[{user:'maitrtesh'},{users:'shivesh'},
        {users:'prajwal'
        },40,]
  return (
    <div>
      {arr.map(function(ele){
        return ele
      })}
    </div>
  )
}

export default users
