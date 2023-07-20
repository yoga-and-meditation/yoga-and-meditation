//import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function NotFound() {
  //const [percentage, setPercentage] = useState(0);

  {/*useEffect(() => {
    const progressLoad = () => {
      if (percentage >= 70) {
        setPercentage(70);
      } else {
        setPercentage((prevPercentage) => prevPercentage + 1);
      }
    };

    const interval = setInterval(progressLoad, 90);
    return () => clearInterval(interval);
  }, [percentage]);*/}

  function downloadFile() {
    window.open("public\docs\info.pdf");
  }

  downloadFile();

  return (
    <div className="notFound-page-container">
      <div className="background"></div>
      <div className="container">
        <div className="top">
          <hr />
          <h2>Yoga and Meditation</h2>
          <hr />
        </div>
        <h1>COMING SOON</h1>
        {/*<h3>PROGRESS</h3>
        <div className="progress-wrapper">
          <div className="progress" style={{ width: `${percentage}%` }}>
            <span>{`${percentage}%`}</span>
          </div>
        </div>*/}

        <p>Please visit us back on 17th of August until then refer to this document</p>
        <a href="\docs\info.pdf" download>Click Me</a>

        <div className="social-icons">
          <a
            href="https://www.facebook.com/sheetal.k.chavan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/sheetalkchavan/"
            target="_blank"
            rel="noopener noreferrer" /*    rel="noopener noreferrer" attribute, which is a recommended security practice when using target="_blank". This helps prevent potential security vulnerabilities when opening links in a new tab.  */
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/sheetalchavan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:info@sheetalchavan.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
