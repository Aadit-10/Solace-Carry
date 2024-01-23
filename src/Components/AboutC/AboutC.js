import React from "react";
import image1 from "../Images/company.png";
import "./AboutC.css";

const AboutC = () => {
  return (
    <div id="aboutc" className="container">
      <div className="company-info">
        <div className="card1">
          <img src={image1} alt="Company" />
        </div>
        <div className="aboutcdes">
          <div className="ac">
            <p>About Solace</p>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutC;
