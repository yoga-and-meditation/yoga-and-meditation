function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-background">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Sheetal Chavan
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">Services</a>
              </li>
            </ul>
            <button className="btn" type="submit">
              Search
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
