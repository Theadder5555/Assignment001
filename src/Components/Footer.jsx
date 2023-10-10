import React from "react";
import CARSERRA from "./CARSERRA.png";

function Footer() {
  const customStyle = {
    backgroundColor: "#5941BB", // Set the background color
    fontFace: "Nunito Sans",
  };
  const meStyle = {
    backgroundColor: "#806CCE",
    fontFace:"ABeeZee",
    padding:'20px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center', 
    fontSize: "22px"
  }

  return (
    <div>
      <div
      className="text-white grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-8 pl-20 pr-32 "
        style={customStyle}
      >
        <div className="pt-32 pb-24 sm:grid-cols-1  md:grid-cols-4 lg:grid-cols-4 ">
          <img src={CARSERRA} alt="logo" />
        </div>
        <div className="support mt-8 md:mt-4 lg:mt-8 "> {/* Adjust columns and margins for responsiveness */}
          <h1 className="font-bold text-2xl cursor-default mb-4">Find Support</h1>
          <div className="py-0">
            <ul>
              <li className="py-2 font-light text-lg cursor-pointer">info@carserra.com</li>
              <li className="py-2 font-light text-lg cursor-pointer">www.carserra.com</li>
              <li className="py-2 font-light text-lg cursor-pointer">admin@carserra.com</li>
            </ul>
          </div>
        </div>
        <div className="media mt-8 ">
          <h1 className="font-bold text-2xl mb-4 cursor-default">Find Us On</h1>
          <div className="py-2">
            <ul>
              <li className="py-2 font-light text-xlg cursor-pointer ">Facebook</li>
              <li className="py-2 font-light text-xlg cursor-pointer">Twitter</li>
              <li className="py-2 font-light text-xlg cursor-pointer">Instagram</li>
            </ul>
          </div>
        </div>
        <div className="find specifications mt-8">
          <h1 className="font-bold text-2xl mb-4 cursor-default">Find Specifications</h1>
          <div className="py-2 "> {/* Updated to four columns for larger screens */}
            <ul className="grid lg:gap-x-12 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
              <li className="py-2 font-light text-lg cursor-pointer">Toyota</li>
              <li className="py-2 font-light text-lg cursor-pointer">Porsche</li>
              <li className="py-2 font-light text-lg cursor-pointer">BMW</li>
              <li className="py-2 font-light text-lg cursor-pointer">Honda</li>
              <li className="py-2 font-light text-lg cursor-pointer">KIA</li>
              <li className="py-2 font-light text-lg cursor-pointer">Audi</li>
              <li className="py-2 font-light text-lg cursor-pointer">Tesla</li>
              <li className="py-2 font-light text-lg cursor-pointer">Mercedes</li>
              <li className="py-2 font-light text-lg cursor-pointer">Nissan</li>
            </ul>
            {/* Add more columns or items as needed */}
          </div>
        </div>
      </div>
      <div 
      className="rights text-white py-4 font-normal "
        style={meStyle }
      >
        <div className=" cursor-default">
          © All Rights Reserved • Carserra • 2021
        </div>  
      </div>
    </div>
  );
}

export default Footer;
