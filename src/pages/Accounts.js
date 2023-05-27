import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import BottomContainer from "../components/common/bottomcontainer";
import { Link } from "react-router-dom";
import MiddleBanner from "../components/common/middlebanner";
import Hero from "../components/common/hero";

function Accounts() {
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
        title="Chose your account"
        description="We have three incredible accounts to chose from. Depending on what you are looking for from basic to expert if you're a finance whizz. We are not protected by the Financial Services Authority (but neither is Revolut)."
        buttonText="Open a Finzo account"
        imageUrl="http://www.burswoodpartners.com.au/wp-content/uploads/2018/06/cc-ico.png"
      />
      <div className="middle-container">
        <div className="grid-item">
          <MiddleBanner
            imgSrc="http://cdn.onlinewebfonts.com/svg/img_2197.png"
            headerText="Basic Account"
            paragraphText="Our Finzo Basic Account is perfect for everyday banking. Enjoy free cash withdrawals of up to £500 in the UK or abroad, 
            a not so attractive 1% interest rate on your savings, and cashback on all your
            card payments. Plus, our dedicated customer service team is always on hand to help you in case there's an issue."
            buttonText="Basic"
            buttonLink="/customisecard"
            showBorder={true}
          />
        </div>
        <div className="grid-item">
          <MiddleBanner
            imgSrc="https://cdn.onlinewebfonts.com/svg/img_2196.png"
            headerText="Intermediate Account"
            paragraphText="Step up your banking game with our Intermediate Account. You'll enjoy all the benefits of the Basic Account, with the added perks of free cash withdrawals up to £1000 
            and an impressive 5% interest rate on your savings. You also get travel insurance for peace of mind while you explore the world."
            buttonText="Intermediate"
            buttonLink="/customisecard"
            showBorder={true}
          />
        </div>
        <div className="grid-item">
          <MiddleBanner
            imgSrc="https://icon-library.com/images/one-icon/one-icon-29.jpg"
            headerText="Expert Account"
            paragraphText="For the financially savvy, our Finzo Expert Account is the ultimate banking choice. Get free cash withdrawals up to £2000, a leading 7% interest rate on your savings, and cashback on all 
            card payments. You also benefit from travel insurance, and our exceptional customer service team is always ready to support you."
            buttonText="Expert"
            buttonLink="/customisecard"
            showBorder={true}
          />
        </div>
      </div>
      <BottomContainer paragraphText="Don't be shy and make the switch to Finzo today" />
      <Footer />
    </div>
  );
}

export default Accounts;
