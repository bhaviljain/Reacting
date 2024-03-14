import { useState } from 'react'

import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import CartPage from './components/Cart'
import SingleProduct from './components/SingleProduct'
function App() {
  return (
   <BrowserRouter>
   <Header />
   <div className='App'>
    <Routes>
    <Route path='/' element ={<Home/>}/>
  
    <Route path='/cart' element ={<CartPage/>}/>

      

    </Routes>
   </div>
    </BrowserRouter>
  )
}

export default App
