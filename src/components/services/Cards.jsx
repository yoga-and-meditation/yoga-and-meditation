import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Card = ({ image, header, price, buttonText, className, elements }) => (
  <div className={`card-${className}`} key={header}>
    <div className={`card-header header-${className}`}>
      <img src={image} alt={header} />
    </div>
    <div className={`card-body card-element-hidden-${className}`}>
      <h3>{header}</h3>

      <ul className="card-element-container">
        {elements.map((element, index) => (
          <li className="card-element" key={index}>
            <FaCheckCircle className="circle-icon" /> {element}
          </li>
        ))}
        {price && (
          <li className="card-element">
            <FaCheckCircle className="circle-icon" /> {price}
          </li>
        )}
      </ul>

      <div className="btn-container">
        <Link to="/contacts" className="btn">
          {buttonText}
        </Link>
      </div>
    </div>
  </div>
);

export default Card;
