
 import {useState,useEffect} from 'react' 
const Cart = ({ cart, setCart }) => {
let[total,setTotal]=useState(0)

useEffect(() => {
    let calculatedTotal = 0;
    cart.forEach((ele) => {
      calculatedTotal += ele.price;
    });
    // Update the total state
    setTotal(calculatedTotal);
  }, [cart]);
    return (
      <div>
        <h1>Your Shopping Cart</h1>
        <p></p>
        <ul>
          {cart.map((ele) => (
            <div key={ele.id}><div><h3>{ele.cardContainer}</h3><p>{ele.header}</p></div>
            <div><h5>Price{ele.price}</h5></div> </div>
             
          ))}
<h4>Total={total}</h4>
        </ul>
        
      </div>
    );
  };

export default Cart
