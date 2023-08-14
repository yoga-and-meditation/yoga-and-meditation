import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import image1 from "../assets/images/motivation/yoga.jpg";
import image2 from "../assets/images/motivation/meditation.jpg";
import image3 from "../assets/images/motivation/retreating.jpg";

/* Service Data Array */
const meditationData = [
  {
    title: "Meditation",
    text: `The HBR mentions in its article, ‘What Meditation Can Do for Your Leadership’, that meditation is an antidote to ego. The article also mentions that in times of uncertainty, the survival part of our brain (mainly the amygdala) kicks in when we perceive a threat and causes our focus to narrow. Meditation can be of tremendous help during times like this. Practicing meditation has been shown to reduce anxiety, calm the amygdala, increase our ability to think creatively and empathetically take other people’s perspective. Steve Jobs, an early adopter of meditation, described his experience like this: “You start to see things more clearly and be in the present more. Your mind just slows down, and you see a tremendous expanse in the moment. You see so much more than you could see before.”`,
  },
];

/* Cards Data Array */
const cardsData = [
  // Courses under Meditation service

  {
    image: image1,
    header: "Online Meditation",
    price: "€70 /course",
    buttonText: "Join now",
    className: "standard",
    elements: [
      "4 sessions of 45 minutes",
      "Every Friday",
      "Meditation techniques for daily practice",
      "Be a part of weekly group meditation",
    ],
  },
  {
    image: image2,
    header: "In-person Meditation",
    price: "€80 /course",
    buttonText: "Join now",
    className: "premium",
    elements: [
      "2 sessions of 1.5 hours",
      "Each Saturday and Sunday",
      "Meditation techniques for daily practice",
      "Be a part of weekly group meditation",
    ],
  },
  {
    image: image3,
    header: "Workshops",
    price: "NIA",
    buttonText: "Contact now",
    className: "basic",
    elements: ["Corporate Meditation", "Yoga", "&", "Retreats workshops"],
  },
];

const Card = ({ image, header, price, buttonText, className, elements }) => (
  <div className={`card-${className}`} key={header}>
    <div className={`card-header header-${className}`}>
      <img src={image} alt={header} />
    </div>
    <div className="card-body">
      <h3>{header}</h3>

      <div className={`card-element-hidden-${className}`}>
        <ul className="card-element-container">
          {elements.map((element, index) => (
            <li className="card-element" key={index}>
              <FaCheckCircle className="circle-icon" /> {element}
            </li>
          ))}
          {price && (
            <li className="card-element">
              <FaCheckCircle className="circle-icon" /> {price}
            </li>
          )}
        </ul>
        <Link to="/contacts" className="btn">
          {buttonText}
        </Link>
      </div>
    </div>
  </div>
);

function Meditation() {
  return (
    <div className="meditation-container">
      {meditationData.map((data, index) => (
        <div className="content-container" key={index}>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      ))}
      <div className="cards-container">
        {cardsData.map((content, index) => (
          <Card {...content} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Meditation;
