import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function NotFound() {
  const [percentage, setPercentage] = useState(0);

  {
    useEffect(() => {
      const progressLoad = () => {
        if (percentage >= 70) {
          setPercentage(70);
        } else {
          setPercentage((prevPercentage) => prevPercentage + 1);
        }
      };

      const interval = setInterval(progressLoad, 90);
      return () => clearInterval(interval);
    }, [percentage]);
  }

  return (
    <div className="notFound-page-container">
      <div className="background"></div>
      <div className="container">
        <div className="top">
          <hr />
          <h2>Yoga and Meditation</h2>
          <hr />
        </div>

        <h3>PROGRESS</h3>
        <div className="progress-wrapper">
          <div className="progress" style={{ width: `${percentage}%` }}>
            <span>{`${percentage}%`}</span>
          </div>
        </div>

        <p>Please visit us back on 17th of August</p>

        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer" /*    rel="noopener noreferrer" attribute, which is a recommended security practice when using target="_blank". This helps prevent potential security vulnerabilities when opening links in a new tab.  */
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:thebestteam.dci@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
