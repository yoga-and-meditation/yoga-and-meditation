import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { cardsData, serviceData } from "../database/services/data";
import { useMyContext } from "../Context/Context";

function Services() {
  const{cart,setcart}=useMyContext()
  function addToCart(item){ 
    const cardContainer=cart.map((ele)=>{return ele.cardContainer})
    if(cart.includes(item)){
    alert('item already exist')
    
  }else if (cardContainer.includes(item.cardContainer)){
    alert('you already choosed one level from this  ')
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
    </div>
  );
}

export default Services;