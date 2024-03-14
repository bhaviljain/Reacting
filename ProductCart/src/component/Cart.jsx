import React, { useContext } from 'react'
import { useCart } from './CartContext'

const Cart = () => {
    const cart = useCart()
    const total = cart.items.reduce((a ,b)=>a + b.price,0)
    const Removebtn= () =>{
        setitems.length = 0;
    }
  return (
    <div> 

    <h2>Cart</h2>
        {cart &&
        cart.items.map((item)=>(
      <li>
      {item.name}{item.price}   

      </li>
        ))}
        <h4>Total Rs: {total}</h4>
    </div>
  )
}

export default Cart