import React from "react";
import "./Home.css";
import BOTTLE from "../../Assets/glass.png";
const Home = () => {
  return (
    <div id="home">
      <div className="bg">
        <div className="container container_home">
          <div className="left">
            <h1>Plan Your Event With Us!</h1>
            <div className="btns">
              <a className="btn1" href="#signup">Sign up</a>
              <a className="btn2" href="#login">Log in</a>
            </div>
          </div>
          <div className="right">
            <img src={BOTTLE} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
