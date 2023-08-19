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
      header: "Starter",
      price: "€70 per course",
      buttonText: "Book now",
      className: "basic",
      elements: [
        "Online Yoga",
        "For the duration of 4 sessions",
        "45 minutes each Friday",
        "Learn all the basic yoga poses",
      ],
    },
    {
      header: "Professional",
      price: "€120 per course",
      buttonText: "Book now",
      className: "standard",
      elements: [
        "In-person Yoga",
        "For the duration of 6 weeks",
        "3 sessions per week",
        "Learn advance yoga poses",
      ],
    },
    {
      header: "Champion",
      price: "€180 per course",
      buttonText: "Book now",
      className: "premium",
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
      price: "€50 per course",
      buttonText: "Book now",
      className: "standard",
      elements: [
        "Online Meditation",
        "For the duration of 4 weeks",
        "30 minutes each Tuesdays",
        "Learn the Basics of Meditation",
      ],
    },
    {
      header: "Professional",
      price: "€90 per course",
      buttonText: "Book now",
      className: "premium",
      elements: [
        "In-person Meditation",
        "For the duration of 6 weeks",
        "3 sessions per week",
        "Improve Emotional Well-being",
      ],
    },
    {
      header: "Champion",
      price: "€150 per course",
      buttonText: "Book now",
      className: "basic",
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
