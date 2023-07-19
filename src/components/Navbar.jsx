//import {Link ,Outlet} from 'react-router-dom'
import { useState } from "react"; 
import { FcMenu } from "react-icons/fc";

function Navbar() {






  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h1>Sheetal Chavan</h1>
        </div>
        <div>
          <ul className="nav-menu">
            <li>
              <a href="#" />
              Home
            </li>
            <li>
              <a href="#" />
              About
            </li>
            <li>
              <a href="#" />
              Services
            </li>
            <button>Contact</button>
          </ul>
        </div>
        <div className="hamburger"><FcMenu onClick={handleClick}/></div>
      </nav>
    </div>
  );
}

export default Navbar;
