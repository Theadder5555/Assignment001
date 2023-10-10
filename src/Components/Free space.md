import React from "react";
import CARSERRA from "./CARSERRA.png";

function Footer() {
  const customStyle = {
    backgroundColor: "#5941BB", // Set the background color
    fontFamily: 'Nunito, sans-serif',
  };

  return (
    <div
      className="text-white grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pt-8 pl-8 "
      style={customStyle}
    >
      <div className="mb-4 md:mt-32 sm:grid-cols-1  md:grid-cols-4 lg:grid-cols-4 ">
        <img src={CARSERRA} alt="CARSERRA logo" />
      </div>
      <div className="support mt-8 md:mt-4 lg:mt-8 "> {/* Adjust columns and margins for responsiveness */}
        <h1 className="font-bold text-2xl mb-4">Find Support</h1>
        <div className="py-4">
          <ul>
            <li className="py-2 font-light text-lg cursor-pointer">info@carserra.com</li>
            <li className="py-2 font-light text-lg cursor-pointer">www.carserra.com</li>
            <li className="py-2 font-light text-lg cursor-pointer">admin@carserra.com</li>
          </ul>
        </div>
      </div>
      <div className="media mt-8">
        <h1 className="font-bold text-2xl mb-4">Find Us On</h1>
        <div className="py-4">
          <ul>
            <li className="py-2 font-light text-lg cursor-pointer">Facebook</li>
            <li className="py-2 font-light text-lg cursor-pointer">Twitter</li>
            <li className="py-2 font-light text-lg cursor-pointer">Instagram</li>
          </ul>
        </div>
      </div>
      <div className="find specifications mt-8">
        <h1 className="font-bold text-2xl mb-4">Find Specifications</h1>
        <div className="py-4 "> {/* Updated to four columns for larger screens */}
          <ul className="grid gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <li className="py-2 font-light text-lg cursor-pointer">Toyota</li>
            <li className="py-2 font-light text-lg cursor-pointer">Porsche</li>
            <li className="py-2 font-light text-lg cursor-pointer">BMW</li>
            <li className="py-2 font-light text-lg cursor-pointer">Audi</li>
            <li className="py-2 font-light text-lg cursor-pointer">Mercedes</li>
            <li className="py-2 font-light text-lg cursor-pointer">Ford</li>
          </ul>
          {/* Add more columns or items as needed */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
