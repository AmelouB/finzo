import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import { Link } from "react-router-dom";


function Borrowing() {
  return (
    <div className="App">
      <Navbar>
        <Link to="/">finzo</Link>
        <Link to="../Accounts">Accounts</Link>
        <Link to="../Borrowing">Borrowing</Link>
        <Link to="../Savings">Savings</Link>
        <Link to="../Join us">Join us</Link>
      </Navbar>
      <Footer />
    </div>
  );
}

export default Borrowing;
