import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">

        <div className="row align-items-center py-4">
          <div className="col-md-6 text-center text-md-start">
            <h4 className="text-white fw-bold mb-2">
              Rajal Rokad
            </h4>

            <p className="text-light opacity-75 mb-0">
              Full Stack Developer
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
           <Link to="/" className="footer-link me-3">
              Home
            </Link>

            <Link to="/about" className="footer-link me-3">
              About
            </Link>

            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center py-3">
          <p className="text-light opacity-75 mb-0">
            © 2026 Rajal Rokad. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

