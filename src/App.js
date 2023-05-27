import React from "react";
import "./App.css";
import Navbar from "./components/common/navbar";
import Hero from "./components/common/hero";
import MiddleBanner from "./components/common/middlebanner";
import Footer from "./components/common/footer";
import BottomContainer from "./components/common/bottomcontainer";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Link to="/">finzo</Link>
        <Link to="../Accounts">Accounts</Link>
        <Link to="../Borrowing">Borrowing</Link>
        <Link to="../Savings">Savings</Link>
        <Link to="../Join us">Join us</Link>
      </Navbar>

      <Hero
        title="Get your money high"
        description="Spend, borrow and save your money in one place. Multiply your money or risk it all. The power of the finance gods are in your hands."
        buttonText="Open a Finzo account"
        ButtonLink="/Accounts"
        imageUrl="https://cdn1.iconfinder.com/data/icons/marketing-and-business-colored/64/marketing-business-icon-colored-1-02-512.png"
      />

      <div className="middle-container">
        <div className="grid-item">
          <MiddleBanner
            imgSrc="https://cdn3.iconfinder.com/data/icons/e-commerce-trading/512/credit-512.png"
            headerText="Personalise your card"
            paragraphText="Nobody wants a boring card. Personalise your card by choosing your logo and your color to make it truly yours."
            buttonText="Customise"
            buttonLink="/customisecard"
          />
        </div>
        <div className="grid-item">
          <MiddleBanner
            imgSrc="https://cdn0.iconfinder.com/data/icons/clocks/500/clock_stopwatch_time_timer_wait_watch_10-512.png"
            headerText="Contact us 24/7"
            paragraphText="Because there is bound to be a ton of problems, you can reach our team anytime. We may or may not respond."
            buttonText="Contact us"
            buttonLink="/customisecard"
          />
        </div>
        <div className="grid-item">
          <MiddleBanner
            imgSrc="https://cdn.onlinewebfonts.com/svg/img_119878.png"
            headerText="Send money"
            paragraphText="See where you money goes. You are 100% in charge of your account and your future. Send money to your friends and family."
            buttonText="Send funds"
            buttonLink="/customisecard"
          />
        </div>
      </div>
      <BottomContainer
        paragraphText="Join and become our 
        first customer to open a Finzo bank account"
      />
      <Footer />
    </div>
  );
}

export default App;
