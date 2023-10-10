import React from "react";
import carserra from "./CARSERRA black.png"
import "./Triangle.css"

function Header() {
  const firstStyle = {
    FontFace: "Public Sans",
    FontSize: "24px",
    color: "#000000",
    display: "flex",
    justifyContent: "center",
    gap: "180px"
  }
  return (
    <div className="font-normal mb-16 mt-12" style={firstStyle}>
      <div className="cursor-pointer font-medium">
        <p>News</p>
      </div>
      <div className="cursor-pointer font-medium flex">
        <p>Find a car</p>
        <div className="triangle mt-2.5 ml-2"></div>
      </div>
      <div>
        <img src={carserra} alt="logo"/>
      </div>
      <div className="cursor-pointer font-medium">
        <p>About Us</p>
      </div>
      <div className="cursor-pointer font-medium">
        <p>Contact</p>
      </div>
    </div>
  );  
}

export default Header;