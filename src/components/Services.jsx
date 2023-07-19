import { useState, useEffect } from "react";

import image1 from "../assets/images/services/yoga.jpg";
import image2 from "../assets/images/services/meditation.jpg";
import image3 from "../assets/images/services/retreating.jpg";
import yogaIcon from "../assets/images/services/yoga-icon.png";

function Services() {
  const [tab, setTab] = useState(1);

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
      </div>
      <div className="tab-container">
        <ul className="navigation">
          <li className="active">
            <button onClick={() => setTab(1)}>
              <span className="icon">
                <img src={yogaIcon} alt="yoga icon" />
              </span>
              <span className="text">Yoga</span>
            </button>
          </li>
          <li>
            <button onClick={() => setTab(2)}>
              <span className="icon">
                <img src={yogaIcon} alt="yoga icon" />
              </span>
              <span className="text">Meditaion</span>
            </button>
          </li>
          <li>
            <button onClick={() => setTab(3)}>
              <span className="icon">
                <img src={yogaIcon} alt="yoga icon" />
              </span>
              <span className="text">Retreats</span>
            </button>
          </li>
        </ul>
      </div>

      {tab === 1 && (
        <section>
          <div className="card m-5 card-container">
            <div className="row g-10">
              <div className="col-md-4">
                <img
                  src={image1}
                  className="img-fluid rounded-start"
                  alt="Yoga image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">Yoga</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam hic provident at unde porro odio voluptas repellat
                    soluta! Ducimus voluptatem vero odio voluptatibus fugiat
                    soluta asperiores, ullam reiciendis vel hic culpa
                    architecto. Perferendis ducimus accusantium perspiciatis
                    qui, accusamus libero earum laudantium maiores voluptatem
                    officiis! Vel quos aliquam tenetur a possimus! asperiores,
                    ullam reiciendis vel hic culpa architecto. Perferendis
                    ducimus accusantium perspiciatis qui, accusamus libero earum
                    laudantium maiores voluptatem officiis! Vel quos aliquam
                    tenetur a possimus!
                  </p>

                  <button className="subscribe-btn">Make an Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {tab === 2 && (
        <section>
          <div className="card m-5 card-container">
            <div className="row g-10">
              <div className="col-md-4">
                <img
                  src={image2}
                  className="img-fluid rounded-start"
                  alt="Meditation image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">Meditation</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam hic provident at unde porro odio voluptas repellat
                    soluta! Ducimus voluptatem vero odio voluptatibus fugiat
                    soluta asperiores, ullam reiciendis vel hic culpa
                    architecto. Perferendis ducimus accusantium perspiciatis
                    qui, accusamus libero earum laudantium maiores voluptatem
                    officiis! Vel quos aliquam tenetur a possimus! asperiores,
                    ullam reiciendis vel hic culpa architecto. Perferendis
                    ducimus accusantium perspiciatis qui, accusamus libero earum
                    laudantium maiores voluptatem officiis! Vel quos aliquam
                    tenetur a possimus!
                  </p>

                  <button className="subscribe-btn">Make an Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {tab === 3 && (
        <section>
          <div className="card m-5 card-container">
            <div className="row g-10">
              <div className="col-md-4">
                <img
                  src={image3}
                  className="img-fluid rounded-start"
                  alt="Retreats image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">Retreats</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam hic provident at unde porro odio voluptas repellat
                    soluta! Ducimus voluptatem vero odio voluptatibus fugiat
                    soluta asperiores, ullam reiciendis vel hic culpa
                    architecto. Perferendis ducimus accusantium perspiciatis
                    qui, accusamus libero earum laudantium maiores voluptatem
                    officiis! Vel quos aliquam tenetur a possimus! asperiores,
                    ullam reiciendis vel hic culpa architecto. Perferendis
                    ducimus accusantium perspiciatis qui, accusamus libero earum
                    laudantium maiores voluptatem officiis! Vel quos aliquam
                    tenetur a possimus!
                  </p>

                  <button className="subscribe-btn">Make an Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Services;
