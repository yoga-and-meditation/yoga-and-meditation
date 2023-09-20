import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { FcMenu } from "react-icons/fc";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <nav className={isOpen ? "navbar expanded" : "navbar"}>
        <div className="logo">
          <h1>Y&M</h1>
        </div>
        <div>
          <ul className="nav-menu">
            <li className="item">
              <NavLink
                className="links link-color"
                activeClassName="active-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="item">
              <NavLink
                className="links link-color"
                activeClassName="active-link"
                to="/aboutme"
              >
                About
              </NavLink>
            </li>
            <li className="item">
              <NavLink
                className="links link-color"
                activeClassName="active-link" // Add a class for active links
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="contact-btn item">
              <button>
                <NavLink
                  className="links"
                  activeClassName="active-link" // Add a class for active links
                  to="/contacts"
                >
                  Contact
                </NavLink>
              </button>
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
