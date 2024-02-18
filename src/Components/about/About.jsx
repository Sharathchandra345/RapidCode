import React, { Fragment } from "react";
import abot from "./assets/about.png";
import "./about.css";
import Navbar from "../navbar/Navbar";
const About = () => {
  return (
    <Fragment>
      <div className="row" id="about">
        {/* <Navbar /> */}
        <div className="about-main-wrapper">
          <div className="col-sm-4">
            <img src={abot} className="about-content-img" />
          </div>
          <div className="col-sm-7">
            <div className="about-content-div">
              <h2 className="main-heading" data-content="About">
                About
              </h2>
              <p style={{ paddingBottom: "1rem" }}>
                ‘'Rapid Code” sparks coding passion with hands-on challenges,
                workshops, and expert-led discussions. Whether a seasoned
                developer or beginner, this event provides a platform to enhance
                skills, explore Google tech, and collaborate. Focused on code
                quality, efficiency, and creativity, it empowers students for
                real-world success in tech's fast-paced landscape. RAPID CODE
                Join us to create an impact that broadens perspectives and
                equips participants with the knowledge to thrive in
                the tech industry!
              </p>

              {/* <p>
                The students would have the opportunity to work on challenges
                faced in the field of precision agriculture and use various
                technologies in the domain of machine learning, deep learning,
                computer vision, data science, etc. to create world class
                solutions that will have practical applications in agriculture.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
