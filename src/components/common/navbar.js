import React from "react";
import "../common/navbar.css";
import {Link} from "react-router-dom";



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">finzo</Link>
      </div>

      <ul class="navbar-tabs">
        <li>
          <Link to="../Accounts">Accounts</Link>
        </li>
        <li>
          <Link to="../Savings">Savings</Link>
        </li>
        <li>
          <Link to="../Borrowing">Borrowing</Link>
        </li>
        <li>
          <Link to="../Joinus">Join us</Link>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;
