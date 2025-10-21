import React, { useState } from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  
  const [btnNameReact,setbtnNameReact] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={()=>{
            if(btnNameReact === "login" ? setbtnNameReact("logout") : setbtnNameReact("login"));
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
