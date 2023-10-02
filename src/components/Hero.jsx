/* import name from "../assets/images/name.png";
 */ import gif1 from "../assets/images/gif1.png";
function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="col1">
          <h1>yoga</h1>
          <h2>and meditation</h2>
        </div>
        <div className="col2 ">
          <img className="img" src={gif1}></img>
          <div className="ball"> </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Hero;
