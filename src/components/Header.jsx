import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  
  const [btnNameReact,setbtnNameReact] = useState("login");
  const onlinestatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
             Online Status : {onlinestatus ? "✅" : "❌" }
          </li>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
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
