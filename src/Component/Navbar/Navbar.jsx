import { useState } from "react";
import "./Navbar.css";
import LOGO from "../../Assets/logo.png";
const Navbar = () => {
  const [navbar,setnavbar]=useState(false)
  const change_bg=()=>{
    if(window.scrollY>=40) setnavbar(true)
    else setnavbar(false)
  }
  window.addEventListener('scroll',change_bg)
  return (
    <div id="navbar" className={navbar?"active":" "}>
      <div className="container">
        <div className="items">
          <div className="logo">
            <img src={LOGO} alt="LOGO" />
          </div>
          <div className="list-items">
            <ul className="list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#idea">Ideas</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact US</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
