import { useState, useEffect } from "react";

import image1 from "../assets/images/services/yoga.jpg";
import image2 from "../assets/images/services/meditation.jpg";
import image3 from "../assets/images/services/retreating.jpg";

const servicesData = [
  {
    id: 1,
    title: "Yoga",
    image: image1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
      "Veniam hic provident at unde porro odio voluptas repellat\n" +
      "soluta! Ducimus voluptatem vero odio voluptatibus fugiat\n" +
      "soluta asperiores, ullam reiciendis vel hic culpa\n" +
      "architecto. Perferendis ducimus accusantium perspiciatis\n" +
      "qui, accusamus libero earum laudantium maiores voluptatem\n" +
      "officiis! Vel quos aliquam tenetur a possimus! asperiores,\n" +
      "ullam reiciendis vel hic culpa architecto. Perferendis\n" +
      "ducimus accusantium perspiciatis qui, accusamus libero earum\n" +
      "laudantium maiores voluptatem officiis! Vel quos aliquam\n" +
      "tenetur a possimus!",
  },
  {
    id: 2,
    title: "Meditation",
    image: image2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
      "Veniam hic provident at unde porro odio voluptas repellat\n" +
      "soluta! Ducimus voluptatem vero odio voluptatibus fugiat\n" +
      "soluta asperiores, ullam reiciendis vel hic culpa\n" +
      "architecto. Perferendis ducimus accusantium perspiciatis\n" +
      "qui, accusamus libero earum laudantium maiores voluptatem\n" +
      "officiis! Vel quos aliquam tenetur a possimus! asperiores,\n" +
      "ullam reiciendis vel hic culpa architecto. Perferendis\n" +
      "ducimus accusantium perspiciatis qui, accusamus libero earum\n" +
      "laudantium maiores voluptatem officiis! Vel quos aliquam\n" +
      "tenetur a possimus!",
  },
  {
    id: 3,
    title: "Retreats",
    image: image3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
      "Veniam hic provident at unde porro odio voluptas repellat\n" +
      "soluta! Ducimus voluptatem vero odio voluptatibus fugiat\n" +
      "soluta asperiores, ullam reiciendis vel hic culpa\n" +
      "architecto. Perferendis ducimus accusantium perspiciatis\n" +
      "qui, accusamus libero earum laudantium maiores voluptatem\n" +
      "officiis! Vel quos aliquam tenetur a possimus! asperiores,\n" +
      "ullam reiciendis vel hic culpa architecto. Perferendis\n" +
      "ducimus accusantium perspiciatis qui, accusamus libero earum\n" +
      "laudantium maiores voluptatem officiis! Vel quos aliquam\n" +
      "tenetur a possimus!",
  },
];

function Services() {
  const [tab, setTab] = useState(1);

  const handleTabClick = (id) => {
    setTab(id);
  };

  useEffect(() => {
    const list = document.querySelectorAll(".navigation li");

    function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }

    list.forEach((item) => item.addEventListener("click", activeLink));

    return () => {
      list.forEach((item) => item.removeEventListener("click", activeLink));
    };
  }, []);

  return (
    <div className="service-container">
      <div className="header-container">
        <h2>What We Do?</h2>
        <h3>Our Services</h3>
        <div className="tab-container">
          <ul className="navigation">
            {servicesData.map((service) => (
              <li
                key={service.id}
                className={tab === service.id ? "active" : ""}
                onClick={() => handleTabClick(service.id)}
              >
                <button>
                  <span className="icon">
                    {tab === service.id ? (
                      <ion-icon name="triangle-sharp"></ion-icon>
                    ) : (
                      <ion-icon name="person-outline"></ion-icon>
                    )}
                  </span>
                  <span className="text">{service.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {servicesData.map((service) =>
        tab === service.id ? (
          <section key={service.id}>
            <div className="card m-5 card-container">
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
                    <p className="card-text">{service.description}</p>
                    <button className="subscribe-btn">
                      Make an Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null
      )}
    </div>
  );
}

export default Services;
