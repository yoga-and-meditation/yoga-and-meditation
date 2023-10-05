import aboutImg from "../assets/images/about/about.png";

function Aboutme() {
  return (
    <div className="about-container">
      <img className="about-image" src={aboutImg} alt="personal photo" />

      <div className="rectangle1"></div>
      <div className="rectangle2"></div>

      <section>
        <h2>About Me</h2>
        <p>
          My name is Jessica and I am a certified yoga and meditation instructor. I have been practicing yoga for over 10 years and teaching for the past 5 years. I am passionate about helping others find their own unique yoga and meditation practice to improve their physical and mental health.
        </p>
      </section>
    </div>
  );
}

export default Aboutme;
