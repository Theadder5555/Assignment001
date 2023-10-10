import React from "react";
import Suzuki from "./Suzuki.png"
import Tesla from "./Tesla.png"
import Toyota from "./Toyota.png"
import Audi from "./Audi.png"
import BMW from "./BMW.png"
import KIA from "./KIA.png"
import Mercedes from "./Mercedes-benz.png"
import Porsche from "./Porsche.png"

function Market() {
  const container2Style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    width: "100vw", // Set container width to full viewport width
    height: "100vh",
  };
  
  const meStyle = {
    backgroundColor: "#5941BB"  
  }

  const containerStyle = {
    width: "174px", // Set the width and height of the rectangle
    height: "160px",
    backgroundColor: "#FFFFFF", // Rectangle background color
    display: "flex", // Use flexbox to center content vertically and horizontally
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontall
    border: "1px solid #5941BB",
    marginBottom: "48px"
  };

  const whiteStyle = {
    backgroundColor: "#FAFAFA",
    border: "1px solid #5941BB",
    alignItems: "center",
    placeItems: "center",
    display: "grid",
  }

  const imageStyle = {
    maxWidth: "100%", // Ensure the image fits within the container
    maxHeight: "100%",
  };

  const Marketstyle = {
    color: "#5941BB",
    fontSize: "40px",
    fontFace: "Almarai"
  }
  return (
    <div>
      <div className="font-bold ml-16">
        <p className="cursor-default" style={Marketstyle}>Featured Market:</p>
      </div>       
      <div 
      className="mb-48"
      >
        <div className=" grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 mx-16 px-12 gap-8 pb-12 pt-24" style={whiteStyle}>
          <div   
          className=""
            style={containerStyle}
          >
            <img src={Suzuki} alt="logo" style={imageStyle} />
          </div>
          <div className="" style={containerStyle}>  
            <img src={Tesla} alt="logo" />
          </div>
          <div className="" style={containerStyle}>  
            <img src={Toyota} alt="logo" />
          </div>
          <div className="" style={containerStyle}>  
            <img src={Audi} alt="logo" />
          </div>
          <div className="" style={containerStyle}>  
            <img src={BMW} alt="logo" />
          </div>  
          <div className="" style={containerStyle}>  
            <img src={KIA} alt="logo" />
          </div>
          <div className="" style={containerStyle}>  
            <img src={Mercedes} alt="logo" />
          </div>
          <div className="" style={containerStyle}>
            <img src={Porsche} alt="logo" />
          </div>
        </div> 
      </div>
    </div>  
  );  
}

export default Market;