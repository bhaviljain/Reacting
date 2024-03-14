import React from 'react'
import { CartContext } from './CartContext'
import { useContext } from 'react'
const Item = (props) => {
const cart = useContext(CartContext)
console.log(cart);
  return (
    <div>
        <h4>{props.name}</h4>
        <h4>Rs: {props.price}</h4>
        <button className='bg-sky-700' onClick={()=>cart.setitems([
            ...cart.items,
            {name: props.name ,price: props.price},
            ])
            }
            >  
             Add to Cart
                </button>

    </div>
  )
}

export default Item