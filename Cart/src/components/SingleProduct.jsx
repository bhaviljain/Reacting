import React, { useContext } from 'react'
import { Cart } from './Context'

const SingleProduct = ({prod}) => {
  const {cart, setCart} = useContext(Cart)
  return (
    
 <div className='product mt-2'>
   <img src={prod.image}/>
   <span className='font-bold flex'>{prod.name}</span>
   <span className='font-medium flex'>  Rs:  {prod.price} </span>
   {cart.includes(prod) ? (
  <button onClick={()=>setCart(cart.filter((c)=>c.id!==prod.id))} className='bg-gray-400 hover:bg-gray-50 hover:text-red-700 rounded-sm'>Remove Cart</button>
   ):(
    <button onClick={()=>setCart([...cart,prod])} className='bg-gray-400 hover:bg-gray-50 hover:font-bold rounded-sm'>Add To Cart</button>
   )}

   


 
   </div>

   
   

    
  )
}

export default SingleProduct