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
              <Link className='links'to="/hero" >Home</Link>
              
            </li>
            <li className="item">
              <Link className='links' to="/aboutme">About</Link>
              
            </li>
            <li className="item">
              <Link  className='links'to="/services">Services</Link>
              
            </li >
            <li><button><Link className='links' to='/contacts'>Contact</Link></button></li>
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
