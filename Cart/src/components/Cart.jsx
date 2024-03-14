import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SingleProduct from './SingleProduct'
import { Cart } from './Context'

const CartPage = () => {
  const navigate = useNavigate()
  const handleClickforBack = () => {
  navigate(-1)
  } 
  const {cart , setCart} = useContext(Cart)
  const total = cart.reduce((a ,b)=>a + b.price,0)

  return (

    <div>
            <button className='ml-[50%] mt-2 bg-orange-600 hover:bg-orange-200' onClick={handleClickforBack}>Go back</button>

      <h2>Total - Rs : <span className='font-semibold'>{total}</span></h2>
      {cart.map((prod)=>(
        <div className='flex float-left p-2 flex-wrap'>
       <SingleProduct prod={prod} key={prod.id}/>
       </div>
      ))}
    </div>
  )
}

export default CartPage