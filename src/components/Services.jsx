import { Link, Outlet, BrowserRouter, Routes, Route } from "react-router-dom";

import image1 from "../assets/images/services/yoga.jpg";
import image2 from "../assets/images/services/meditation.jpg";
import image3 from "../assets/images/services/retreating.jpg";

const cardsData = [
  {
    title: "Yoga",
    id: 1,
    image: image1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic provident at unde porro odio voluptas repellat soluta! Ducimus voluptatem vero odio voluptatibus fugiat soluta asperiores, ullam reiciendis vel hic culpa architecto. Perferendis ducimus accusantium perspiciatis qui, accusamus libero earum laudantium maiores voluptatem officiis! Vel quos aliquam tenetur a possimus! asperiores, ullam reiciendis vel hic culpa architecto. Perferendis ducimus accusantium perspiciatis qui, accusamus libero earum laudantium maiores voluptatem officiis! Vel quos aliquam tenetur a possimus!",
  },
  {
    title: "Meditation",
    id: 2,
    image: image2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic provident at unde porro odio voluptas repellat soluta! Ducimus voluptatem vero odio voluptatibus fugiat soluta asperiores, ullam reiciendis vel hic culpa architecto. Perferendis ducimus accusantium perspiciatis qui, accusamus libero earum laudantium maiores voluptatem officiis! Vel quos aliquam tenetur a possimus! asperiores, ullam reiciendis vel hic culpa architecto. Perferendis ducimus accusantium perspiciatis qui, accusamus libero earum laudantium maiores voluptatem officiis! Vel quos aliquam tenetur a possimus!",
  },
  {
    title: "Retreating",
    id: 3,
    image: image3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic provident at unde porro odio voluptas repellat soluta! Ducimus voluptatem vero odio voluptatibus fugiat soluta asperiores, ullam reiciendis vel hic culpa architecto. Perferendis ducimus accusantium perspiciatis qui, accusamus libero earum laudantium maiores voluptatem officiis! Vel quos aliquam tenetur a possimus! asperiores, ullam reiciendis vel hic culpa architecto. Perferendis ducimus accusantium perspiciatis qui, accusamus libero earum laudantium maiores voluptatem officiis! Vel quos aliquam tenetur a possimus!",
  },
];

const ServiceCards = ({ cards }) => {
  return (
    <div className="service-card">
      {cards.map((card) => (
        <div key={card.id}>
          <div className="card m-5">
            <div className="row g-10">
              <div className="col-md-4">
                <img
                  src={card.image}
                  className="img-fluid rounded-start"
                  alt={card.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.description}</p>
                  <button className="youbtn">Make an Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Yoga = () => {
  return <ServiceCards cards={[cardsData[0]]} />;
};

const Meditation = () => {
  return <ServiceCards cards={[cardsData[1]]} />;
};

const Retreats = () => {
  return <ServiceCards cards={[cardsData[2]]} />;
};

const Parent = () => {
  return (
    <div className="parent">
      <Link to="/">
        <button>Yoga</button>
      </Link>
      <Link to="/meditation">
        <button>Meditation</button>
      </Link>
      <Link to="/retreats">
        <button>Retreats</button>
      </Link>
      <Outlet />
    </div>
  );
};

function Services() {
  return (
    <div className="services-container">
      <h2>What We Do?</h2>
      <h3>Our Services</h3>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Yoga />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/retreats" element={<Retreats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Services;
