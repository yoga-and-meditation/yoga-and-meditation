import {Link ,Outlet} from 'react-router-dom'

function Navbar() {
  return (
   
    <div>
      <nav className="navbar navbar-expand-lg nav-background">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            Sheetal Chavan
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end gap-5" id="navbarSupportedContent">
            <ul className="navbar-nav gap-2">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/hero">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutme">
                About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
            </ul>
            <button className="btn" type="submit" >
            <Link className="nav-link" to="/contacts">Contacts</Link> 
            </button>
          </div>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default Navbar;
