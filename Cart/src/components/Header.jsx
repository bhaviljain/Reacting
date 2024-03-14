import React from 'react'
import { Link } from 'react-router-dom'
import { Cart } from './Context'
import { useContext } from 'react'
const Header = () => {
  const {cart , setCart} = useContext(Cart)
  return (

    <div>
        <ul className='bg-sky-300 h-20 flex justify-center'>
            <li className='flex justify gap-[150px] justify-center items-center'>
        <Link className='hover:bg-sky-700' to='/'>Home Page</Link>
        
        <Link className='hover:bg-sky-700' to='/cart'>🛒 - <span> ({cart.length}) </span></Link>
        </li>
        </ul>
    </div>
  )
}

export default Header