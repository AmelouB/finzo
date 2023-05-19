import React from "react";
import '../common/footer.css';


const Footer = () => {
    const year = new Date().getFullYear();
  
    return (
      <footer className="footer">
        <div className="container-footer">
          <div className="left-container-footer">
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Terms and conditions</li>
            </ul>
          </div>
          <div className="middle-container-footer">
            <ul>
              <li className="contact-footer">Sign up to our newsletter</li>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Submit</button>
            </ul>
            <div className="copyright">
              Copyright © finzo {year}
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;