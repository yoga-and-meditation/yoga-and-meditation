//Icons
import {  FaFacebook,FaInstagram, FaTwitter } from 'react-icons/fa';
function Footer() {
  return (
    <>
      <div className="footer-container  d-flex">
        <div className="logo m-5">
          <h4>logo</h4>
        </div>
        <div className="about-me">
          <h4>About me </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quidem pariatur autem neque, voluptatum sit error sint. Qui,
            facilis. Consectetur temporibus ullam neque tempore, ut perferendis
            nostrum necessitatibus repellendus fuga.
          </p>
          <div className='icons'>  <FaFacebook />
           <FaInstagram/>
           <FaTwitter/>
           </div>
       
          {/* <div>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        </div> */}
        </div>

        <div className="links">
          <h4 className="text-center">Links</h4>
          <ul>
            <li className="list-group">
              <a href=""></a>Home
            </li>
            <li className="list-group">
              <a href="#"></a>About Me
            </li>
            <li className="list-group">
              <a href="#"></a>Services
            </li>
            <li className="list-group">
              <a href="#"></a>Contact
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
