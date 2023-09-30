import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { cardsData, serviceData } from "../database/services/data";
import { useMyContext } from "../context/Context.jsx";
 import Modal from 'react-bootstrap/Modal';
function Services() {

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
   const [showModal, setShowModal] = useState(false);

   const closeModal = () => {
    setShowConfirmationModal(false);
    setShowModal(false);

  }; 
  const{cart,setcart}=useMyContext()
  function addToCart(item){ 
    const cardContainer=cart.map((ele)=>{return ele.cardContainer})
    if(cart.includes(item)){
       setShowConfirmationModal(true);
   }else if (cardContainer.includes(item.cardContainer)){
    setShowModal(true);
  }
  else{
    setcart([...cart,item])
  }
  }
  const [tab, setTab] = useState(0); // Initialize tab index

  const handleTabClick = (index) => {
    setTab(index);
  };

  return (
    <div className="service-container">
      <div className="service-wrapper">
        <div className="header-container">
          <h2>Our Services</h2>
        </div>
        <div className="tab-container">
          <ul className="navigation">
            {serviceData.map((service, index) => (
              <li
                key={index}
                className={tab === index ? "active" : ""}
                onClick={() => handleTabClick(index)}
              >
                <div className="button">
                  <span className="icon">
                    <img
                      src={
                        tab === index
                          ? service.activeIcon
                          : service.inActiveIcon
                      }
                      alt={`${service.title} icon`}
                    />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <section className="service-section">
          <div className="card-content-container">
            <div className="cards-container">
              {cardsData[tab].map((content, index) => (
                <div key={index} className={`card-${content.className}`}>
                  <div className={`${content.cardContainer}`}>
                    {/* Card Header */}
                    <div className={`card-header header-${content.className}`}>
                      <h3>{content.header}</h3>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                      {content.price && (
                        <p>
                          <h4>{content.price}</h4>
                        </p>
                      )}
                      <div
                        className={`card-element-hidden-${content.className}`}
                      >
                        {/* List of elements for the course */}
                        <ul className="card-element-container">
                          {content.elements.map((element, elementIndex) => (
                            <li className="card-element" key={elementIndex}>
                              <FaCheckCircle className={`circle-icon-${tab}`} />
                              {element}
                            </li>
                          ))}
                        </ul>
                        {/* Button to join the course */}
                        <Link
                              onClick={()=>addToCart(content)}
                              className={`btn btn-${content.className}`}
    
                        >
                          {content.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Modal show={showConfirmationModal} onHide={closeModal} centered>
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
           <Modal.Title>Sorry!!</Modal.Title>
       </Modal.Header>
        <Modal.Body>
You already choosed this service        </Modal.Body>
        <Modal.Footer>
          
          <button className='contact-btn'
                      onClick={closeModal}

          >
You already choosed one level from this service</button>
        </Modal.Footer>
      </Modal> 
    </div>
  );
}

export default Services;
