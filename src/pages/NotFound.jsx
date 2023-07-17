import { useEffect, useState } from "react";

function NotFound() {
  const [percentage, setPercentage] = useState(0);

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

  return (
    <div>
      <div className="background"></div>
      <div className="container">
        <div className="top">
          <hr />
          <h2>Yoga with Sheetal</h2>
          <hr />
        </div>
        <h1>UNDER CONSTRUCTION</h1>
        <h3>PROGRESS</h3>
        <div className="progress-wrapper">
          <div className="progress" style={{ width: `${percentage}%` }}>
            <span>{`${percentage}%`}</span>
          </div>
        </div>
        <div className="social-icons">
          <a href="#your-fb-page">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#your-twitter-profile">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#your-linkedin-page">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#your-instagram-page">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#your-youtube-page">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#rss">
            <i className="fas fa-rss"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
