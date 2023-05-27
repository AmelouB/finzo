import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = ({ title, description, buttonText, buttonLink, imageUrl }) => {
  return (
    <div className="top-wrapper">
      <div className="middle-wrapper">
        <h1 className="middle-wrapper-header">{title}</h1>
        <p className="middle-wrapper-par">{description}</p>
        <Link to={buttonLink}>
          <button className="join-us">{buttonText}</button>
        </Link>
      </div>
      <div className="right-wrapper">
        <img src={imageUrl} alt="bank" />
      </div>
    </div>
  );
};

export default Hero;
