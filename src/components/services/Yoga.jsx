import Card from "./Cards";
import image1 from "../../assets/images/motivation/yoga.jpg";
import image2 from "../../assets/images/motivation/meditation.jpg";
import image3 from "../../assets/images/motivation/retreating.jpg";

/* Service Data Array */
const yogaData = [
  {
    title: "Yoga",
    text: `The Harvard Health Publishing of the Harvard Medical School mentions in its blog, Yoga for better mental health, when you lift weights, your muscles get stronger and bigger. When you do yoga, your brain cells develop new connections, and changes occur in brain struc­ture as well as function, resulting in improved cog­nitive skills, such as learning and memory. Yoga strengthens parts of the brain that play a key role in memory, attention, awareness, thought, and language. Think of it as weightlifting for the brain.`,
  },
];

/* Cards Data Array */
const cardsDataYoga = [
  // Courses under Meditation service

  {
    image: image1,
    header: "Online Yoga",
    price: "€8 /session",
    buttonText: "Join now",
    className: "standard",
    elements: [
      "1 session of 70 minutes",
      "Every Monday",
      "Yoga techniques for daily practice",
      "Be a part of weekly group Yoga",
    ],
  },
  {
    image: image2,
    header: "In-person Yoga",
    price: "€13 /session",
    buttonText: "Join now",
    className: "premium",
    elements: [
      "1 session of 1.5 hours",
      "Every Thursday",
      "Yoga techniques for daily practice",
      "Be a part of weekly group yoga",
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

function Yoga() {
  return (
    <div className="service-container">
      {yogaData.map((data, index) => (
        <div className="content-container" key={index}>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      ))}
      <div className="cards-container">
        {cardsDataYoga.map((content, index) => (
          <Card {...content} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Yoga;
