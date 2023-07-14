import { useState } from "react";

import image1 from "../assets/images/services/yoga.jpg";
import image2 from "../assets/images/services/meditation.jpg";
import image3 from "../assets/images/services/retreating.jpg";

function Services() {
  const [tab, setTab] = useState(1);

  return (
    <div className="service-container">
      <div className="header-container">
        <h2>What We Do?</h2>
        <h3>Our Services</h3>
        <div className="tab-container">
          <header>
            <button onClick={() => setTab(1)}>Yoga</button>
            <button onClick={() => setTab(2)}>Meditation</button>
            <button onClick={() => setTab(3)}> Retreats</button>
          </header>
        </div>
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
