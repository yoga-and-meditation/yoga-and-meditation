import {Link ,Outlet} from 'react-router-dom'
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
              <Link to="/hero.jsx" />
              Home
            </li>
            <li className="item">
              <Link to="/aboutme.jsx" />
              About
            </li>
            <li className="item">
              <Link to="/services.jsx" />
              Services
            </li >
            <button to='/contacts.jsx'>Contact</button>
          </ul> 
        </div>
        <div className="hamburger" onClick={toggleNav}>
          {isOpen?<GrClose/>:<FcMenu/>}
        </div> 
      </nav>
      <Outlet/>
    </div>
  );
}
export default Navbar;
