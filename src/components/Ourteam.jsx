import image1 from "../assets/images/Team/Rosh2.jpg";
import image2 from "../assets/images/Team/Abdulwase.png";
import image3 from "../assets/images/Team/Louis.jpg";
import image4 from "../assets/images/Team/kidan2.png";
import image5 from "../assets/images/Team/Shaqayeq.jpeg";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Ourteam = () => {
  const cardsData = [
    {
      id: 1,
      title: "Abdulwase Naeemi",
      Linkedin: "https://www.linkedin.com/in/abdulwase-naeemi/",
      Github: "https://github.com/Naeemi7",
      image: image2,
    },
    {
      id: 2,
      title: " Roshini Muralidharan",
      Linkedin: "https://www.linkedin.com/in/roshini-muralidharan/",
      Github: "https://github.com/roshinimurali",
      image: image1,
    },
    {
      id: 3,
      title: "Louis Peter",
      Linkedin: "https://www.linkedin.com/in/louisclarencepeter/",
      Github: "https://github.com/louisclarencepeter",
      image: image3,
    },
    {
      id: 4,
      title: "Kidan Lakew",
      Linkedin: "https://www.linkedin.com/in/kidan-lakew/",
      Github: "https://github.com/Kidan-Tekelearegy",
      image: image4,
    },
    {
      id: 5,
      title: "Shaqayeq Taheri",
      Linkedin: "https://www.linkedin.com/in/shaqayeq-taheri-328697254/",
      Github: "https://github.com/Shaqayeq-taheri",
      image: image5,
    },
  ];
  return (
    <div className="ourteam">
      <h2 className="teamheading">Developed By</h2>
      <div className="profilecard">
        {cardsData.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} className="img-profile" alt="" />
            <h4>{card.title}</h4>
            <div className="icon-container">
              {" "}
              <a href={card.Linkedin} target="_blank" rel="noopener noreferrer">
                <BsLinkedin className="icon" />{" "}
              </a>
              <a href={card.Github} target="_blank" rel="noopener noreferrer">
                <BsGithub className="icon" />{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourteam;
