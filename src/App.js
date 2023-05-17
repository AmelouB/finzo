import React from "react";
import './App.css';
import Navbar from "./navbar/navbar.js";
import Wrapper from "./wrapper/wrapper.js";
import MiddleWrapper from "./wrapper/middlewrapper";



function App() {
  return (
    <div>
      <Navbar/>
      <Wrapper/>

      <div class="container">

        <div class="grid-item">
          <img src="card.jpg"></img>
            <h3 class="grid-header">Customise your card</h3>
            <p class="grid-par">Nobody wants a boring card. 
              We know you want to be extra special. 
              You can add a logo, choose a color, it's just yours.</p>
        </div>
        
        <div class="grid-item">
          <img src="clock.jpg"></img>
          <h3 class="grid-header">Reach us 24 / 7</h3>
          <p class="grid-par">Because we know that there 
            will be a lot of problems, 
            our teams remain available 
            24/7 to answer your questions.</p>
          </div>
          
          <div class="grid-item">
            <img src="send.jpg"></img>
            <h3 class="grid-header">See your money grow</h3>
            <p class="grid-par">Understand clearly where your 
            money goes, send it to friends and family, 
            see it grow in our savings account 
            or lose it all.</p>
          </div>

      </div>
      
      <MiddleWrapper/>
    </div>
  )
}

export default App;
