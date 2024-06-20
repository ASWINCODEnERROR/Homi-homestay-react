import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />

          <span className="secondaryText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
            <br />
            iste nulla quis adipisci ipsa pariatur ab! Et debitis libero,
          </span>
        </div>

        <div className="flexColstart f-right">
          <span className="primaryText">Information</span>
          <br />
          <span className="secondaryText"> Bangaluru post 787</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
