import React from "react";
import './navbar.css';

const Navbar=()=>{
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <a href="#homepage">finzo</a>
            </div>
            <ul class="navbar-tabs">
                <li><a href="#accounts">Accounts</a></li>
                <li><a href="#savings">Savings</a></li>
                <li><a href="#borrowing">Borrowing</a></li>
                <li><a href="#joinus">Join us</a></li>
            </ul>   
        </div>
    )
}

export default Navbar;