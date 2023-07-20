//import {Link ,Outlet} from 'react-router-dom'
 import { useState } from "react"; 
 import { FcMenu } from "react-icons/fc";
 import { GrClose } from "react-icons/gr";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {setIsOpen(!isOpen)};


  return (
    <div>
      <nav className={isOpen? 'navbar expanded':'navbar'}>
        <div className="logo">
          <h1>Sheetal Chavan</h1>
        </div>
        <div>
          <ul className="nav-menu">
            <li className="item">
              <a href="#" />
              Home
            </li>
            <li className="item">
              <a href="#" />
              About
            </li>
            <li className="item">
              <a href="#" />
              Services
            </li >
            <button className="item">Contact</button>
          </ul> 
        </div>
        <div className="hamburger" onClick={toggleNav}>
          {isOpen?<GrClose/>:<FcMenu/>}
        </div> 
      </nav>
    </div>
  );
}

export default Navbar;
