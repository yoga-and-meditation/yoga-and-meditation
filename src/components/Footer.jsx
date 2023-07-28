//Icons
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

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
                <a href="website@sheetalchavan.com">
                  {" "}
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="links">
          <ul>
            <h5>Links</h5>
            <li className="list-group">
              <Link
                className="footer-link active"
                aria-current="page"
                to="/hero"
              >
                Home
              </Link>
            </li>
            <li className="list-group">
              <Link
                className="footer-link active"
                aria-current="page"
                to="/about-me"
              >
                About Me
              </Link>
            </li>
            <li className="list-group">
              <Link
                className="footer-link active"
                aria-current="page"
                to="/demo"
              >
                Demo
              </Link>
            </li>
            <li className="list-group">
              <Link
                className="footer-link active"
                aria-current="page"
                to="/services"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
      <div className="copyright p-3">© 2023 Copyright Reserved</div>
    </footer>
  );
}

export default Footer;
