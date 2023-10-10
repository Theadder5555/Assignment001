import React from "react";
import carserra from "./CARSERRA-faded.png"
import {FaSearch} from "react-icons/fa"

function Bar() {

  const containerStyle = {
    backgroundColor: "#FAFAFA",
    border: "1px solid #5941BB",
  }

  const weStyle =  {
    fontFace: "Almarai",
    fontSize: "36px",
    color: "#5941BB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  
  const imageStyle = {
    display: "flex",
    justifyContent: "center",
  }

  const container2Style = {
    height: "64px",
    backgroundColor: "#FFFFFF", // Rectangle background color // Center horizontall
    border: "1px solid #5941BB",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    cursor: "text"
  }

  const container4Style = {
    width: "64px", // Set the width and height of the rectangle
    height: "64px",
    backgroundColor: "#806CCE", // Rectangle background color // Center horizontall
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "735.57px"
  }


  const container3Style = {
    display: "flex", // Use flexbox to center content vertically and horizontally
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontall
  }

  const container5Style = {
    width: "1100px", // Set the width and height of the rectangle
    backgroundColor: "#FAFAFA", // Rectangle background color // Center horizontall
    border: "1px solid #5941BB",
    fontFace: "Roboto",
    fontSize: "23px",
    color: "#9D9D9D",
  }

  const inputStyle = {
    padding: "10px", // Add padding for input field
    fontSize: "18px", // Input font size
    border: "none", // Remove the default input border // Add border-radius for rounded corners
    outline: "none", // Remove focus outline
    color: "#000000",
    fontFace: "Roboto",
    fontSize: "23px",
    marginLeft: "40px"
  };

  const fontStyle = {
    fontFace: "Roboto Condensed",
    color: "#171717",
    fontSize: "23px",
    marginLeft: "40px"
  }

  const font2Style = {
    fontFace: "Average Sans",
    color: "#5F5E5E",
    fontSize: "22px",
    marginLeft: "40px",
    display: "flex"
  }

  return (
    <div className="mx-12" style={containerStyle}>
      <div className="mx-16 mt-20 " style={weStyle}>
        <p className="font-bold ml-4 cursor-default"> Finding a dream car is not that easy, but we made it easy for you in just one click you may able to get market details.</p>
      </div>
      <div className="my-16" style={imageStyle}>
        <img src={carserra} alt="logo" />
      </div>
      <div className="" style={container3Style}>  
        <div className="font-light " style={container2Style}>
          <input
        type="text"
        placeholder="Find your dream car here:"
        style={inputStyle}
      />
          <div className="cursor-pointer" style={container4Style}>
            <FaSearch size={30} className="mx-2 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="" style={container3Style}>
        <div className="mt-16 mb-24 " style={container5Style}>
          <div className="font-normal mt-8 cursor-default" style={fontStyle}>
            <p>Recent Searches:</p>
          </div>       
          <div className="font-normal" style={font2Style}>
            <ul className="flex gap-8 py-8 ">
              <p className="cursor-pointer">Tesla X</p>
              <p className="cursor-pointer">Juke</p>
              <p className="cursor-pointer">Fortuner</p>
              <p className="cursor-pointer">Thundra</p>
              <p className="cursor-pointer">Elantra</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default Bar;