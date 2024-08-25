import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, Link } from 'react-router-dom'
import User from './components/User'
import Home from './components/Home'
import { UserDetails } from './components/UserDetails'
function App() {

  
  return (
    <>
    <nav className='flex gap-10 justify-center items-center'>
      <Link to ='/'>Home</Link>
      <Link to ='user'>User</Link>
      <Link to ='about'>About</Link>
      </nav>
 <Routes>
 <Route path ='/user' element ={<User/>}/>
<Route path ='/user/:id' element ={<UserDetails/>}/>
 <Route path ='/' element ={<Home/>}/>

 </Routes>
    </>
  )
}

export default App
