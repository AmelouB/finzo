import React from "react";
import '../common/middlewrapper.css';

function MiddleWrapper() {
    return (
      <div className="container">
        <div className="grid-item">
          <img src="https://cdn3.iconfinder.com/data/icons/e-commerce-trading/512/credit-512.png" alt="card"/>
          <h3 className="column-header">Personalise your card</h3>
          <p className="column-par">Nobody wants a boring card. Personalise your card 
            by chosing your logo and your color to make it truly yours.</p>
        </div>
        
        <div className="grid-item">
          <img src="https://cdn0.iconfinder.com/data/icons/time-39/32/Time_Outline_Time_Watch_Clock_Date_Timer-01-512.png" alt="clock"/>
          <h3 className="column-header">Reach our team 24 / 7</h3>
          <p className="column-par">Because we know there is bound to be some problems, our teams
            remain available to contact around the clock.
          </p>
        </div>
        
        <div className="grid-item">
          <img src="http://cdn.onlinewebfonts.com/svg/img_183018.png" alt="send"/>
          <h3 className="column-header">See your money grow</h3>
          <p className="column-par">Understand where your money goes, where it is being sent 
            and hopefully see it grow or be prepared to lose it all.</p>
        </div>
      </div>
    );
  }
  

export default MiddleWrapper