import React from "react";
import "./Party.css";
const party = (props) => {
  return (
    <div id="party">
      <div className="main-container">
        <a href="#">
          <img src={props.img} alt="img" />
          <div className="overlay">
            <h2>{props.text}</h2>
            <span></span>
            <p>
              {props.desc}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default party;
