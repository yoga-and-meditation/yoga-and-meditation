import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
//Icons
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import logo from "../assets/images/logo.png";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      <div className="footer-container">
        <div className="logo-container">
          {/*  <h4 className="logo">Yoga and Meditation</h4> */}
          <img src={logo} alt="yoga and meditaion" />
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
                <a href="https://www.facebook.com">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-group">
                <a href="https://www.instagram.com">
                  <FaInstagram />
                </a>
              </li>
              <li className="list-group">
                <a href="https://www.linkedin.com">
                  <FaLinkedin />
                </a>
              </li>
              <li className="list-group">
                <a href="#">
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
                About
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
