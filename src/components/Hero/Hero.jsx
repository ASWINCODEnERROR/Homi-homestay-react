import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from "react-countup";



const Hero = () => {
  return (
    <section className="hero-wrapper">
       
      <div className="paddings innerWidth flexCenter hero-Container">
        {/* leftsid */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle "  />
            <h1 >
              Discover <br /> Most Suitable <br />
              Home
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium nisi doloribus vitae iste facil
            </span>
            <span> Praesentium nisi doloribus vitae iste facil</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={8800} end={9500} duration={4} />
                    <span>+</span>
                </span>
                <span className="secondaryText">Premium Homes</span>
            </div>

            <div className="flexColCenter stat">
                <span>
                    <CountUp start={1500} end={2000} duration={4} />
                    <span>+</span>
                </span>
                <span className="secondaryText">Happy Coustomer </span>
            </div>

            <div className="flexColCenter stat">
                <span>
                    <CountUp  end={50} />
                    <span>+</span>
                </span>
                <span className="secondaryText">Award winnings</span>
            </div>
          </div>
        </div>
        {/* right========================================================== */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
