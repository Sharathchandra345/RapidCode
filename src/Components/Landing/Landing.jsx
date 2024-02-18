import React, { useState, useEffect } from "react";
import LogoNav from "../LogoNav/LogoNav";
import prize from "./assets/prize.png";
import prize_800 from "./assets/prize_800.png";
import prize_350 from "./assets/prize_350.png";
import prize_mobile from "./assets/prize_mobile.png";
import "./landing.css";

const Landing = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="landing" id="home">
      <LogoNav />
      <div className="landing-content">
        {/* <img src={prize} id="image" alt="" /> */}
        {/* <img src={prize_800} id="image_800" alt="" /> */}
        {/* <img src={prize_mobile} id="image_mobile" alt="" /> */}
        {/* <img src={prize_350} id="image_350" alt="" /> */}
        {/* <div className="ribbon ribbon-top-left">
          <span>
            Prices Worth <br /> 1.5 lac
          </span>
        </div> */}
        {/* <p>  AN INTERNATIONAL LEVEL INITIATIVE</p> */}
        <h1>RAPID CODE</h1>
        <h4>23rd February 5PM-8PM</h4>
        <div className="buttons">
          {/* <button>Register</button> <button>Submit</button> */}
          {/* <button
            onClick={() => {
              window.location.href =
                "https://www.notion.so/Apply-with-Devfolio-Integration-Guide-183c6fb761c142efadfae129862d0a8c";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 115.46 123.46"
              fill="#fff"
              height={30}
              style={{ marginRight: 12 }}
            >
              <path
                d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 
            12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 
            13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 
            2.18.08 3.34z"
              ></path>
              <path
                d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 
            104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 
            55.41 0 0 1 50.58 55.34z"
              ></path>
            </svg>
            {"  "}Apply with Devfolio
          </button> */}
     
          <div
            class="apply-button"
            data-hackathon-slug="rapid-code"
            data-button-theme="light"
            style="height: 44px; width: 312px"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
