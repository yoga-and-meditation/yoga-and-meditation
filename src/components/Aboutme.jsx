import sheetalImg from "../assets/images/Rectangle 593.jpg";
//import goldRectangle from "../assets/images/Rectangle 594.jpg";
//import grayRectangle from "../assets/images/Rectangle 595.jpg";

function Aboutme() {
  return (
    <div className="about-container">
      <div className="about-img-container">
        <img src={sheetalImg} alt="personal photo" />
        {/* <img src={goldRectangle} alt="a gold rectangle"/>
        <img src={grayRectangle} alt="a gray rectangle" /> */}
      </div>
      <section>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi voluptatum voluptatem, facilis, fugiat quam placeat consequatur id eveniet pariatur labore, quo quia fuga dignissimos perspiciatis. Eius fuga delectus recusandae.
        </p>
      </section>
    </div>
  );
}

export default Aboutme;
