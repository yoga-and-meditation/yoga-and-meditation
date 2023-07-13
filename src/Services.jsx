import { Link, Outlet, BrowserRouter, Routes, Route } from "react-router-dom";

/* Yoga Component */

const Yoga = () => {
  return <h1>I am yoga</h1>;
};

const Meditation = () => {
  return <h1>I am Meditation</h1>;
};

const Retreats = () => {
  return <h1>I am Retreats</h1>;
};

const Parent = () => {
  return (
    <>
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
    </>
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
            <Route path="/" element={<Yoga />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/retreats" element={<Retreats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Services;
