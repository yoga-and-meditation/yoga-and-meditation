import { useState } from "react";

import image1 from "../assets/images/services/yoga.jpg";
import image2 from "../assets/images/services/meditation.jpg";
import image3 from "../assets/images/services/retreating.jpg";
import yogaGoldIcon from "../assets/images/services/yoga-gold.png";
import yogaWhiteIcon from "../assets/images/services/yoga-white.png";

const serviceData = [
  {
    title: "Yoga",
    activeIcon: yogaWhiteIcon,
    inActiveIcon: yogaGoldIcon,
    image: image1,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Veniam hic provident at unde porro odio voluptas repellat
    soluta! Ducimus voluptatem vero odio voluptatibus fugiat
    soluta asperiores, ullam reiciendis vel hic culpa
    architecto. Perferendis ducimus accusantium perspiciatis
    qui, accusamus libero earum laudantium maiores voluptatem
    officiis! Vel quos aliquam tenetur a possimus! asperiores,
    ullam reiciendis vel hic culpa architecto. Perferendis
    ducimus accusantium perspiciatis qui, accusamus libero earum
    laudantium maiores voluptatem officiis! Vel quos aliquam
    tenetur a possimus!`,
  },
  {
    title: "Meditation",
    activeIcon: yogaWhiteIcon,
    inActiveIcon: yogaGoldIcon,
    image: image2,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Veniam hic provident at unde porro odio voluptas repellat
    soluta! Ducimus voluptatem vero odio voluptatibus fugiat
    soluta asperiores, ullam reiciendis vel hic culpa
    architecto. Perferendis ducimus accusantium perspiciatis
    qui, accusamus libero earum laudantium maiores voluptatem
    officiis! Vel quos aliquam tenetur a possimus! asperiores,
    ullam reiciendis vel hic culpa architecto. Perferendis
    ducimus accusantium perspiciatis qui, accusamus libero earum
    laudantium maiores voluptatem officiis! Vel quos aliquam
    tenetur a possimus!`,
  },
  {
    title: "Retreats",
    activeIcon: yogaWhiteIcon,
    inActiveIcon: yogaGoldIcon,
    image: image3,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Veniam hic provident at unde porro odio voluptas repellat
    soluta! Ducimus voluptatem vero odio voluptatibus fugiat
    soluta asperiores, ullam reiciendis vel hic culpa
    architecto. Perferendis ducimus accusantium perspiciatis
    qui, accusamus libero earum laudantium maiores voluptatem
    officiis! Vel quos aliquam tenetur a possimus! asperiores,
    ullam reiciendis vel hic culpa architecto. Perferendis
    ducimus accusantium perspiciatis qui, accusamus libero earum
    laudantium maiores voluptatem officiis! Vel quos aliquam
    tenetur a possimus!`,
  },
];

function Services() {
  const [tab, setTab] = useState(1);

  const handleTabClick = (index) => {
    setTab(index + 1);
  };

  return (
    <div className="service-container">
      <div className="header-container">
        <h2>What We Do?</h2>
        <h3>Our Services</h3>
      </div>
      <div className="tab-container">
        <ul className="navigation">
          {serviceData.map((service, index) => (
            <li
              key={index}
              className={tab === index + 1 ? "active" : ""}
              onClick={() => handleTabClick(index)}
            >
              <button>
                <span className="icon">
                  <img
                    src={
                      tab === index + 1
                        ? service.activeIcon
                        : service.inActiveIcon
                    }
                    alt={`${service.title} icon`}
                  />
                </span>
                {/*   <span className="text">{service.title}</span> */}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <section>
        {serviceData.map(
          (service, index) =>
            tab === index + 1 && (
              <div key={index} className="card m-5 card-container">
                <div className="row g-10">
                  <div className="col-md-4">
                    <img
                      src={service.image}
                      className="img-fluid rounded-start"
                      alt={`${service.title} image`}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">{service.title}</h3>
                      <p className="card-text">{service.text}</p>
                      <button className="subscribe-btn">
                        Make an Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </section>
    </div>
  );
}

export default Services;
