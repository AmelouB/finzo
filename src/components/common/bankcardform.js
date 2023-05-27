import React, { useState } from "react";
import "./bankcardform.css";


const BankCardForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [color, setColor] = useState("orange");
  const [icon, setIcon] = useState("dog");
  const [message, setMessage] = useState("");
  const handleClick = () => {
    setMessage("Excellent choice!");
  };

  return (
    <div className="top-container">
      <div className="form-container">
        <h1 className="form-header">Customise your card</h1>
        <p className="par-form">
          Ever thought banking could be an expression of your individuality? We believe that every part of your banking
          experience should reflect who you are, including your bank card. Welcome to a world where you use YOUR card.
        </p>
        <form className="form">
          <label className="label">First name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label className="label">Last name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label className="label">Pick a color</label>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="orange">Orange</option>
            <option value="pink">Pink</option>
            <option value="yellow">Yellow</option>
            <option value="red">Red</option>
          </select>

          <label className="label">Select an icon</label>
          <select value={icon} onChange={(e) => setIcon(e.target.value)}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </form>

        <div>
          <button className="submit-form" type="submit" onClick={handleClick}>
            Submit
          </button>
          <p className="thankyou-form">{message}</p>
        </div>
      </div>
      <div className="card-container" style={{ backgroundColor: color }}>
        <div className="card">
          <h2>{`${firstName} ${lastName}`}</h2>
          <img
            className="icon"
            src={
              icon === "dog"
                ? "https://cdn0.iconfinder.com/data/icons/dog-17/169/dog-023-512.png"
                : "http://www.clipartbest.com/cliparts/9TR/Lkr/9TRLkrnAc.png"
            }
            alt={icon}
          />
          <h1 className="card-header">finzo card</h1>
        </div>
      </div>
    </div>
  );
};

export default BankCardForm;