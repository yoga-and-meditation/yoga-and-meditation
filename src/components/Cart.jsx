import Services  from "./Services"
import React, { useState } from 'react';

function Cart(props) {
   
      const sum= props.reduce((total, item) =>{ return total + item.price}, 0);
   
  return (
    <div>
    <h1>cart summary</h1>
    <h6>Items ordered:</h6>
    <h6>Product price:${sum}</h6>
    <h5>shipping cost :10</h5>
    <h5></h5>
    <button>checkout</button>
    </div>
  )
}

export default Cart