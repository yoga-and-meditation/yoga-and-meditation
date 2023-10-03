import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useMyContext } from "../context/Context";
import Modal from "react-bootstrap/Modal";

const Cart = () => {
  const { cart, setcart } = useMyContext();
  let [total, setTotal] = useState(0);
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

  return (
    <div className="ShoppingCart">
      <h1>Your Shopping Cart</h1>
      <p></p>
      <div className="card">
        {cart.map((ele) => (
          <div className="item" key={ele.id}>
            <div className="services">
              {ele.cardContainer}
              <br></br> <p>level: {ele.header}</p>
            </div>
            <div className="price">{ele.price}€</div>
            <div
              className="delete"
              onClick={() => handleDelete(ele.cardContainer)}
            >
              <AiFillDelete className="bin"></AiFillDelete>
            </div>
          </div>
        ))}
        <h4 className="Total">Total: {total} €</h4>
      </div>
      <button
        className="checkout"
        onClick={handlecheckout}
        style={{
          backgroundColor: "#b48821", // Changed background color
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Checkout
      </button>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sorry!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You already chose this service</Modal.Body>
        <Modal.Footer>
          <button
            className="contact-btn"
            onClick={closeModal}
            style={{
              backgroundColor: "#b48821",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for choosing our service</Modal.Title>
        </Modal.Header>
        <Modal.Body>You will get an email regarding the classes </Modal.Body>
        <Modal.Footer>
          <button
            className="model-btn"
            onClick={closeModal}
            style={{
              backgroundColor: "#b48821",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
