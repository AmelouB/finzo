import React from "react";
import './app.css';
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import BankCardForm from "../common/bankcardform";


function App() {
    return (
      <div className="App">
        <Navbar/>
        <BankCardForm/>
        <Footer/>
      </div>
    )
  }
  
  export default App;