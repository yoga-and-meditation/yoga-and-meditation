import sheetalImg from "../assets/images/My project-1.png";


function Aboutme() {
  return (
    <div className="about-container">

      <img src={sheetalImg} alt="personal photo" /> 
      <div className="rectangle1"></div>
      <div className="rectangle2"></div>
   
      <section>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi voluptatum voluptatem, facilis, fugiat quam placeat consequatur id eveniet pariatur labore, quo quia fuga dignissimos perspiciatis. Eius fuga delectus recusandae.
        </p>
       
      </section>

    </div> 
   
  );
}

export default Aboutme;
