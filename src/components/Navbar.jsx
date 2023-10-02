import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FcMenu } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import  {useMyContext } from "../context/Context.jsx";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {cart} =useMyContext()

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const homeLink = document.getElementById("home-link");

    if (homeLink) {
      homeLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default navigation behavior
        handleScrollToTop(); // Scroll to top
        navigate("/"); // Navigate to the home route
        toggleNav(); // Close the navigation menu
      });
    }

    return () => {
      if (homeLink) {
        homeLink.removeEventListener("click", handleScrollToTop);
      }
    };
  }, [navigate]);

  return (
    <div className="navbar-container">
      <nav className={isOpen ? "navbar expanded" : "navbar"}>
        <div className="logo">
          <h1>Y&M</h1>
        </div>
        <div>
          <ul className={`nav-menu ${isOpen ? "show-menu" : ""}`}>
            <li className="item">
              <Link
                to="/"
                id="home-link"
                className="links link-color"
                onClick={toggleNav}
              >
                Home
              </Link>
            </li>
            <li className="item">
              <Link
                to="/aboutme"
                className="links link-color"
                activeClassName="active-link"
                onClick={toggleNav}
              >
                About
              </Link>
            </li>
            <li className="item">
              <Link
                to="/services"
                className="links link-color"
                activeClassName="active-link"
                onClick={toggleNav}
              >
                Services
              </Link>
            </li>
            <li className="contact-btn item">
              <button>
                <Link
                  to="/contacts"
                  className="links"
                  activeClassName="active-link"
                  onClick={toggleNav}
                >
                  Contact
                </Link>
              </button>
            </li>
            <li className="cart ">
              
              <Link className="links" to="/cart">
                < AiOutlineShoppingCart className="cart-btn"/>
                <span className="quantity">{cart.length}</span>
              </Link>
           
          </li>
            <li className="profile-btn">
              <Link to="/login" className="links">
                <FaUserCircle className="user" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleNav}>
          {isOpen ? <GrClose /> : <FcMenu />}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
