import gif1 from "../assets/images/gif1.png";
function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-heading">
        <h1>Yoga</h1>
        {/* <img src={name} className="name" /> */}
        <h2>With Sheetal</h2>
      </div>
      <div className="ball">
        <img src={gif1} className="gif"></img>
      </div>
    </div>
  );
}

export default Hero;
