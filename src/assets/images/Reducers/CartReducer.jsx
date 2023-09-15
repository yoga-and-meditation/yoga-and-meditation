import React from "react";
import { useReducer } from "react";
import cart from '../components/Cart.jsx'

function CartReducer() {
   const Remove=(item)=>{
dispatch({item:{cart.id}})
   }
   const add=(item)=>{
    dispatch({item:{cart.id}})


   }
   const [state,dispatch]=useReducer(cart(item.id))
  return (
    <div>
      
    </div>
  )
}

export default CartReducer
