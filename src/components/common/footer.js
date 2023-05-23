import React, { useState } from "react";
import "../common/footer.css";


const Footer = () => {
  const year = new Date().getFullYear();

  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Thank you!");
  };

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
            <button type="submit" onClick={handleClick}>
              Submit
            </button>
            <p className="thankyou">{message}</p>
          </ul>
          <div className="copyright">Copyright © finzo {year}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
