import React from "react";
import './hero.css';


const Hero=()=>{
    return (
        <div class="top-wrapper">
            <div class="middle-wrapper">
                <h1 class="middle-wrapper-header">Get your money high</h1>
                <p class="middle-wrapper-par">Spend, borrow and save your money in one place. 
                    Multiply your money or risk it all. The power of the finance 
                    godes are in your hands.</p>
                    <button class="join-us">Open a Finzo account</button>
            </div>
            <div className="right-wrapper">
                <img src="https://cdn1.iconfinder.com/data/icons/marketing-and-business-colored/64/marketing-business-icon-colored-1-02-512.png" alt="bank"></img>

            </div>
        </div>
        )
}

export default Hero
