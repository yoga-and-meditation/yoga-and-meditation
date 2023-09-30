
import {useState,useEffect} from 'react' 
import {AiFillDelete} from 'react-icons/ai'
import { useMyContext } from '../Context/Context';
import Modal from 'react-bootstrap/Modal';

const Cart = () => {
 const {cart,setcart}=useMyContext();
let[total,setTotal]=useState(0)
const [showModal, setShowModal] = useState(false);
const closeModal = () => {
 setShowModal(false);

};
const handlecheckout = () => {
 setShowModal(true);
};
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
   const updatedCart = cart.filter((item) => item.cardContainer !== itemId);
   // Call a function to update the cart in your context or state
   // For example, if you have a setCart function in your context, you can use it here
    setcart(updatedCart);
 };
/*  const handleDelete = (itemId) => {
   // Filter out the item with the given ID and update the cart state
   const updatedCart = cart.filter((item) => item.id !== itemId);
   setCart(updatedCart);
 }; */
   return (
     <div className="ShoppingCart">
       <h1>Your Shopping Cart</h1>
       <p></p>
       <div className='card'>
      

{cart.map((ele) => (<div className='item' key={ele.id}>
       <div className='services'>{ele.cardContainer}<br></br> <p>level:{ele.header}</p></div>
       <div className='price'>{ele.price}€</div>
       <div className='delete' onClick={() => handleDelete(ele.cardContainer)} ><AiFillDelete className='bin'></AiFillDelete></div>
      </div>
          
         ))}
<h4 className='Total'>Total={total}€</h4>

       </div>
       <button className='checkout' onClick={handlecheckout}>Checkout</button>

       <Modal show={showModal} onHide={closeModal} centered>
       <Modal.Header closeButton> 
          <Modal.Title>Sorry!!</Modal.Title>
      </Modal.Header>
       <Modal.Body>
You already choosed this service        </Modal.Body>
       <Modal.Footer>
         
         <button className='contact-btn'
                     onClick={closeModal}

         >
OK,thanks for reminding </button>
       </Modal.Footer>
     </Modal> 
     <Modal show={showModal} onHide={closeModal} centered>
       <Modal.Header closeButton> 
          <Modal.Title>Thank you for choosing our service</Modal.Title>
      </Modal.Header>
       <Modal.Body>
you will get an email regarding the classes       </Modal.Body>
       <Modal.Footer>
         
         <button className='model-btn'
                     onClick={closeModal}

         >
close</button>
       </Modal.Footer>
     </Modal> 
     </div>
   );
 };

export default Cart