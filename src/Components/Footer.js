
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Holy Restaurant</h2>
          <p>Your favorite dining experience</p>
        </div>
        <div className="footer-links">
          <a>About Us</a>
          <a>Menu</a>
          <a>Contact</a>
          <a>Reservations</a>
          <a>Privacy Policy</a>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Holy Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;