import { useState } from "react";
import { Link } from "react-router-dom";

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
      header: "Trial",
      price: "NIA",
      buttonText: "Book now",
      className: "basic",
      elements: ["Corporate Meditation,", "Yoga", "&", "Retreats workshops"],
    },
    {
      header: "Daily",
      price: "€8 /session",
      buttonText: "Book now",
      className: "standard",
      elements: [
        "1 session of 70 minutes",
        "Every Monday",
        "Yoga techniques for daily practice",
        "Be a part of weekly group Yoga",
      ],
    },
    {
      header: "Monthly",
      price: "€13 /session",
      buttonText: "Book now",
      className: "premium",
      elements: [
        "1 session of 1.5 hours",
        "Every Thursday",
        "Yoga techniques for daily practice",
        "Be a part of weekly group yoga",
      ],
    },
  ],

  [
    // Courses under Meditation service

    {
      header: "Online Meditation",
      price: "€70 /course",
      buttonText: "Book now",
      className: "standard",
      elements: [
        "4 sessions of 45 minutes",
        "Every Friday",
        "Meditation techniques for daily practice",
        "Be a part of weekly group meditation",
      ],
    },
    {
      header: "In-person Meditation",
      price: "€80 /course",
      buttonText: "Book now",
      className: "premium",
      elements: [
        "2 sessions of 1.5 hours",
        "Each Saturday and Sunday",
        "Meditation techniques for daily practice",
        "Be a part of weekly group meditation",
      ],
    },
    {
      header: "Coming soon",
      price: "NIA",
      buttonText: "Contact now",
      className: "basic",
      elements: ["Corporate Meditation,", "Yoga", "&", "Retreats workshops"],
    },
  ],
  [
    // Courses under Meditation service

    {
      header: "Online Meditation",
      price: "€70 /course",
      buttonText: "Book now",
      className: "standard",
      elements: [
        "4 sessions of 45 minutes",
        "Every Friday",
        "Meditation techniques for daily practice",
        "Be a part of weekly group meditation",
      ],
    },
    {
      header: "In-person Meditation",
      price: "€80 /course",
      buttonText: "Book now",
      className: "premium",
      elements: [
        "2 sessions of 1.5 hours",
        "Each Saturday and Sunday",
        "Meditation techniques for daily practice",
        "Be a part of weekly group meditation",
      ],
    },
    {
      header: "Coming soon",
      price: "NIA",
      buttonText: "Book now",
      className: "basic",
      elements: ["Corporate Meditation,", "Yoga", "&", "Retreats workshops"],
    },
  ],
];

function Services() {
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
                  {/* Card Header */}
                  <div className={`card-header header-${content.className}`}>
                    <h3>{content.header}</h3>
                  </div>
                  {/* Card Body */}
                  <div className="card-body">
                    {content.price && (
                      <p>
                        <h3>{content.price}</h3>
                      </p>
                    )}
                    <div className={`card-element-hidden-${content.className}`}>
                      {/* List of elements for the course */}
                      <ul className="card-element-container">
                        {content.elements.map((element, elementIndex) => (
                          <li className="card-element" key={elementIndex}>
                            {element}
                          </li>
                        ))}
                      </ul>
                      {/* Button to join the course */}
                      <Link
                        to="/contacts"
                        className={`btn btn-${content.className}`}
                      >
                        {content.buttonText}
                      </Link>
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
