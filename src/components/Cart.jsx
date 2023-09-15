
 import {useState,useEffect} from 'react' 
 import {AiFillDelete} from 'react-icons/ai'

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
  const handleDelete = (itemId) => {
    // Filter out the item with the given ID and update the cart state
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };
    return (
      <div className="ShoppingCart">
        <h1>Your Shopping Cart</h1>
        <p></p>
        <div className='card'>
       
 
{cart.map((ele) => (<div className='item' key={ele.id}>
        <div className='services'>{ele.cardContainer}<br></br> <p>level:{ele.header}</p></div>
        <div className='price'>{ele.price}€</div>
        <div className='delete' onClick={() => handleDelete(ele.id)}><AiFillDelete className='bin'></AiFillDelete></div>
       </div>
           
          ))}
<h4 className='Total'>Total={total}€</h4>

        </div>
        <button className='checkout'>Checkout</button>

        
      </div>
    );
  };

export default Cart
