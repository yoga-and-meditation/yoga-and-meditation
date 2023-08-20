import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function UnderConstruction() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const progressLoad = () => {
      if (percentage >= 75) {
        setPercentage(75);
      } else {
        setPercentage((prevPercentage) => prevPercentage + 1);
      }
    };

    const interval = setInterval(progressLoad, 90);
    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="under-construction-page">
      <div className="background"></div>
      <div className="container">
        <div className="top">
          <hr />
          <h2>Yoga & Meditation</h2>
          <hr />
        </div>

        <h3>Construction In Progress</h3>
        <div className="progress-wrapper">
          <div className="progress" style={{ width: `${percentage}%` }}>
            <span>{`${percentage}%`}</span>
          </div>
        </div>

        <p>Stay tuned!!!</p>

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
            rel="noopener noreferrer"
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

export default UnderConstruction;
