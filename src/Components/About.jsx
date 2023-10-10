import React from "react";
import Vehicle from "./Vehicle.png"
import carserra from "./CARSERRA-Purple.png"

function About() {
  const containerStyle = {
    backgroundColor: "#FAFAFA",
    border: "1px solid #5941BB",
  };
  const weStyle =  {
    fontFace: "Almarai",
    fontSize: "42px",
    color: "#5941BB"
  }
  const youStyle ={
    fontFace: "Nunito Sans",
    fontSize: "31px",
    
  }

  const rectangleStyle = {
    width:"300px",
    backgroundColor: "#5941BB",
    fontFace: "Numans",
    fontSize: "28px",
    border: "1px solid #5941BB",
    color: "#FFFFFF"
  }

  return (
    <div className ="grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 my-64 mx-12">
      <div className="">
        <img src={Vehicle} alt="logo" />
      </div>
      <div className="" style={containerStyle}>
        <div className="flex gap-3 mt-12 ml-12">
          <div className=" font-bold cursor-default" style={weStyle}>
            Why
          </div>
          <div className="mt-4">
          <img src={carserra} alt="logo" />
          </div>
          <div className="font-bold cursor-default" style={weStyle}>
            ?
          </div>
        </div>
        <div className=" ml-12 mt-12 font-light" style={youStyle}>
          <p className="cursor-default ">We Have A Variety Of Market Details For Brands Like Suzuki, Toyota, Nissan, Kia, Tesla, Ford, And Honda.</p>
          <p className="cursor-default">You Will Get Updated market prices, models, and complete specifications of your dream car.</p>
          <p className="cursor-default">All you need to do is to find your choice and buy it.</p>
        </div>    
        <div className="font-normal ml-16 my-24 cursor-pointer" style={rectangleStyle}>
          <p className="ml-8 mx-4 cursor-pointer">Get Market Details</p>
        </div>  
      </div>
    </div>
  );  
}

export default About;