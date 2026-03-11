const App = () => {
  // localStorage.setItem('user','maitresh')
  // const user = localStorage.getItem('user')
  //   console.log(user)
  //   localStorage.clear('user')
 const user ={
  username :'maitresh',
  age:19,
  city:'amravati'
 }

 localStorage.setItem('user', JSON.stringify(user))
 localStorage.getItem(user)
 localStorage.removeItem('age')
 console.log(user)
  return (
    <div>
      
       
    </div>
  )
}

export default App
