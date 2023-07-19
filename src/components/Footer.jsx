//Icons
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="footer-container  d-flex">
        <div className="logo m-5">
          <h4>logo</h4>
        </div>
        <div className=" card about-me">
          <h4>About me </h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quidem pariatur autem neque, voluptatum sit error sint. Qui,
            facilis. Consectetur temporibus ullam neque tempore, ut perferendis
            nostrum necessitatibus repellendus fuga.
          </p>
          <div className="icons">
            <ul>
              <li className="list-group">
                <a href="">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-group">
                <a href="">
                  {" "}
                  <FaInstagram />
                </a>
              </li>
              <li className="list-group">
                <a href="">
                  {" "}
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="links">
          <h4 className="m-3">Links</h4>
          <ul>
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
    </>
  );
}

export default Footer;
