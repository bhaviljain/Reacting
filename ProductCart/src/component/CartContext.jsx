import React, {createContext , useState} from 'react'
import { useContext } from 'react'

export const CartContext = createContext(null)

export const useCart = () =>{
    const cart = useContext(CartContext)
   return cart;
}

export const CartProvider = (props) => {
    const [items, setitems] = useState([])
  return (
    <CartContext.Provider value={{items, setitems}}>
   {props.children}

    </CartContext.Provider>

  )
}
