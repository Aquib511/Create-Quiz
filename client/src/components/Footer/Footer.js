import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="quick-links">
        <a href="/">Home</a>
        <a href="/about">About</a>

        <a href="/contact">Contact</a>
      </div>
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          Twitter
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
      <div className="contact-info">
        Email: contact@yourdomain.com
        <br />
        Phone: +1 (123) 456-7890
      </div>
      <div className="newsletter">
        <input type="email" placeholder="Subscribe to our newsletter" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
}

export default Footer;

// -----------------------------------------------------------------------------

// import React from "react";
// import "./Footer.css";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="quick-links">{/* Add your quick links here */}</div>
//       <div className="social-media">
//         {/* Add your social media icons here */}
//       </div>
//       <div className="contact-info">
//         {/* Add your contact information here */}
//       </div>
//       <div className="newsletter">
//         {/* Add your newsletter signup form here */}
//       </div>
//     </footer>
//   );
// }

// export default Footer;
