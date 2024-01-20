// Footer.js
import React from 'react';
import './Footer.css'; // Create a corresponding CSS file for styling if needed

const Footer = () => {
  return (
    <footer>
      <section className="top">
        <img src="logo.svg" alt="Logo" />
        <div className="links">
          <div className="links-column">
            <h2>Portfolio</h2>
            <a>About</a>
            {/* more links */}
          </div>
          {/* another links column */}
          <div className="links-column socials-column">
            <h2>Social Media</h2>
            <p>Follow me on social media to</p>
            <div className="socials">
              <a className="fa-brands fa-instagram"></a>
              {/* more social links */}
            </div>
          </div>
        </div>
      </section>
      <section className="bottom">
        <p className="copyright">© 2024 ...</p>
        <div className="legal">
          {/* legal links */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
