import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="footer bg-dark text-white pt-4 pb-3 mt-0">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-12 col-md-4 mb-3">
              <h5>AmanFlix</h5>
              <p>Stream your favorite movies & shows anytime, anywhere.</p>
            </div>
  
            <div className="col-12 col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><NavLink to="/" className="footer-link">Home</NavLink></li>
                <li><NavLink to="/about" className="footer-link">About</NavLink></li>
                <li><NavLink to="/movie" className="footer-link">Movies</NavLink></li>
                <li><NavLink to="/contact" className="footer-link">Contact</NavLink></li>
              </ul>
            </div>
  
            <div className="col-12 col-md-4 mb-3">
              <h5>Follow Us</h5>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <NavLink to="/instagram" className="footer-social">Instagram</NavLink>
                <NavLink to="/twitter" className="footer-social">Twitter</NavLink>
                <NavLink to="/youtube" className="footer-social">YouTube</NavLink>
              </div>
            </div>
          </div>
          <hr className="bg-white" />
          <p className="text-center mb-0">© 2025 AmanFlix. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;