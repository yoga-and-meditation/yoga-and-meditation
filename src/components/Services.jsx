import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Card from '../components/Cart'
import yogaGoldIcon from "../assets/images/services/yoga-gold.png";
import yogaWhiteIcon from "../assets/images/services/yoga-white.png";
import meditationWhiteIcon from "../assets/images/services/meditation-white.png";
import meditationGoldIcon from "../assets/images/services/meditation-gold.png";

/* Service Data Array */
const serviceData = [
  {
    title: "Yoga",
    activeIcon: yogaWhiteIcon,
    inActiveIcon: yogaGoldIcon,
  },
  {
    title: "Meditation",
    activeIcon: meditationWhiteIcon,
    inActiveIcon: meditationGoldIcon,
  },
  {
    title: "Retreats",
    activeIcon: yogaWhiteIcon,
    inActiveIcon: yogaGoldIcon,
  },
];

/* Cards Data Array */
const cardsData = [
  [
    // Courses under Yoga service
    {
      header: "Starter",
      price: 70,
      buttonText: "Book now",
      className: "basic",
      cardContainer: "yoga",
      elements: [
        "Online Yoga",
        "For the duration of 4 sessions",
        "45 minutes each Friday",
        "Learn all the basic yoga poses",
      ],
    },
    {
      header: "Professional",
      price: 120,
      buttonText: "Book now",
      className: "standard",
      cardContainer: "yoga",
      elements: [
        "In-person Yoga",
        "For the duration of 6 weeks",
        "3 sessions per week",
        "Learn advance yoga poses",
      ],
    },
    {
      header: "Champion",
      price:180,
      buttonText: "Book now",
      className: "premium",
      cardContainer: "yoga",
      elements: [
        "Online Yoga",
        "For the duration of 8 weeks",
        "4 sessions per week",
        "Cultivate inner peace & mindfulness",
      ],
    },
  ],

  [
    // Courses under Meditation service

    {
      header: "Starter",
      price: 50,
      buttonText: "Book now",
      className: "basic",
      cardContainer: "meditation",
      elements: [
        "Online Meditation",
        "For the duration of 4 weeks",
        "30 minutes each Tuesdays",
        "Learn the Basics of Meditation",
      ],
    },
    {
      header: "Professional",
      price: 90,
      buttonText: "Book now",
      className: "standard",
      cardContainer: "meditation",
      elements: [
        "In-person Meditation",
        "For the duration of 6 weeks",
        "3 sessions per week",
        "Improve Emotional Well-being",
      ],
    },
    {
      header: "Champion",
      price: 150,
      buttonText: "Book now",
      className: "premium",
      cardContainer: "meditation",
      elements: [
        "In-Person Meditation",
        "For the duration of 8 weeks",
        "4 sessions per week",
        "Develop Deep States of Meditation",
      ],
    },
  ],
  [
    // Courses under Meditation service

    {
      header: "Starter",
      price: 150,
      buttonText: "Book now",
      className: "basic",
      cardContainer: "retreat",
      elements: [
        "In-person Retreat",
        "For the duration of 3 days",
        "Relaxation and Mindfulness",
        "Self-Care and Wellness Practices",
      ],
    },
    {
      header: "Professional",
      price: 250,
      buttonText: "Book now",
      className: "standard",
      cardContainer: "retreat",
      elements: [
        "In-person Retreat",
        "For the duration of 5 days",
        "Personal Growth and Wellness",
        "Nature walks & silent Reflection",
      ],
    },
    {
      header: "Champion",
      price: 350,
      buttonText: "Book now",
      className: "premium",
      cardContainer: "retreat",
      elements: [
        "In-person Retreat",
        "For the duration of one week",
        "Mastery and Transformation",
        "Connect with Fellow Spiritual",
      ],
    },
  ],
];

function Services() {
  const [tab, setTab] = useState(0); // Initialize tab index

  const handleTabClick = (index) => {
    setTab(index);
  };
  const [card, setCard] = useState([]);
  
    const handladd=(prop) => {
/*       alert('addded to cart')
 */   const newCard=[...card,prop]
 setCard(newCard);
console.log(newCard)
}
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
                        <Link   onClick={()=>handladd(content)}
                          /* to="/contacts" */
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
      <Card card={card}/>
    </div>
  );
}

export default Services;
