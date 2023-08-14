import Card from "./Cards";

import image1 from "../../assets/images/motivation/yoga.jpg";
import image2 from "../../assets/images/motivation/meditation.jpg";
import image3 from "../../assets/images/motivation/retreating.jpg";

/* Service Data Array */
const meditationData = [
  {
    title: "Meditation",
    text: `The HBR mentions in its article, ‘What Meditation Can Do for Your Leadership’, that meditation is an antidote to ego. The article also mentions that in times of uncertainty, the survival part of our brain (mainly the amygdala) kicks in when we perceive a threat and causes our focus to narrow. Meditation can be of tremendous help during times like this. Practicing meditation has been shown to reduce anxiety, calm the amygdala, increase our ability to think creatively and empathetically take other people’s perspective. Steve Jobs, an early adopter of meditation, described his experience like this: “You start to see things more clearly and be in the present more. Your mind just slows down, and you see a tremendous expanse in the moment. You see so much more than you could see before.”`,
  },
];

/* Cards Data Array */
const cardsDataMeditation = [
  // Courses under Meditation service

  {
    image: image1,
    header: "Online Meditation",
    price: "€70 per course",
    buttonText: "Join now",
    className: "standard",
    elements: [
      "Learn ancient meditation techniques",
      "Join first session free",
      "4 weeks online course",
      "4 sessions of 1 hour every week",
      "Free guided meditation at course end",
      "Join our weekly guided meditation group",
      "Free ongoing Q&A support",
    ],
  },
  {
    image: image2,
    header: "In-person Meditation",
    price: "€80 per course",
    buttonText: "Join now",
    className: "premium",
    elements: [
      "Learn ancient meditation techniques",
      "A weekend in-person meditation",
      "Each Saturday and Sunday",
      "2 sessions on each day",
      "Free guided meditation at course end",
      "Join our weekly guided meditation group",
      "Free ongoing Q&A support",
    ],
  },
  {
    image: image3,
    header: "Workshops",
    price: "",
    buttonText: "Contact now",
    className: "basic",
    elements: [
      "Learn ancient meditation techniques",
      "Specially designed for busy professionals",
      "Optional weekly group meditation support",
      "Q&A with experts for attendees",
    ],
  },
];

function Meditation() {
  return (
    <div className="service-container">
      {meditationData.map((data, index) => (
        <div className="content-container" key={index}>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      ))}
      <div className="cards-container">
        {cardsDataMeditation.map((content, index) => (
          <Card {...content} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Meditation;
