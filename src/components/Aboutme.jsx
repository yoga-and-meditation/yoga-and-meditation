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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          animi voluptatum voluptatem, facilis, fugiat quam placeat consequatur
          id eveniet pariatur labore, quo quia fuga dignissimos perspiciatis.
          Eius fuga delectus recusandae.
        </p>
      </section>
    </div>
  );
}

export default Aboutme;