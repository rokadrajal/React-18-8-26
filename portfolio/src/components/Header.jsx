import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg header-section">
      <div className="container">

        <Link to="/" className="navbar-brand text-white fw-bold fs-4" >
          Rajal Rokad
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-3">

            <li className="nav-item">
              <Link className="nav-link header-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link header-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link header-link" to="/skill">
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link header-link" to="/project">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link header-link" to="/certificate">
                Certificates
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link header-link" to="/contact">
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Header;

