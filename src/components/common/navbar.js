import React from "react";
import "../common/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <a href="homepage.html">finzo</a>
      </div>

      <ul class="navbar-tabs">
        <li>
          <a href="./Accounts.js">Accounts</a>
        </li>
        <li>
          <a href="./Savings">Savings</a>
        </li>
        <li>
          <a href="./Borrowing">Borrowing</a>
        </li>
        <li>
          <a href="./Joinus">Join us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
