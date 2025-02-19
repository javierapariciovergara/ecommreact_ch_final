import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'
import EmptyCart from './EmptyCart'
import CartList from './CartList'

const CartContainer = () => {
    const {cart} = useContext(CartContext)
    return (
    <div>
        {cart.length 
        ?<CartList/>
        :<EmptyCart/>
        }
    </div>
  )
}

export default CartContainer