//Icons
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-container">
          <h4 className="logo">Yoga and Meditation</h4>
        </div>
        <div className=" about-me">
          <h5>About me </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quidem pariatur autem neque, voluptatum sit error sint. Qui,
            facilis. Consectetur temporibus ullam neque tempore, ut perferendis
            nostrum necessitatibus repellendus fuga.
          </p>
          <div className="icons">
            <ul>
              <li className="list-group">
                <a href="https://www.facebook.com/sheetal.k.chavan">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-group">
                <a href="https://www.instagram.com/sheetalkchavan/">
                  {" "}
                  <FaInstagram />
                </a>
              </li>
              <li className="list-group">
                <a href="https://www.linkedin.com/in/sheetalchavan/">
                  {" "}
                  <FaLinkedin />
                </a>
              </li>
              <li className="list-group">
                <a href="info@sheetalchavan.com">
                  {" "}
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="  links">
          
          <ul>
          <h5>Links</h5>
            <li className="list-group">
              <a href="">Home</a>
            </li>
            <li className="list-group">
              <a href="#">About Me</a>
            </li>
            <li className="list-group">
              <a href="#">Services</a>
            </li>
            <li className="list-group">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright p-3 fixed-bottom">
        © 2023 Copyright Reserved
      </div>
    </footer>
  );
}

export default Footer;
