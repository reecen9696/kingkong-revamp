import React from "react";
import phone from "../assets/icons/phone.svg";
import logo from "../assets/icons/logo.svg";
import burger from "../assets/icons/burger.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 z-50">
      <div className="flex items-center">
        <img className="w-8 h-8" src={phone} alt="Phone Icon" />
        <p className="ml-2 text-white font-prompt font-medium">
          1-888-303-8580
        </p>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src={logo} alt="KingKong logo" />
      </div>

      <img className="w-8 h-8" src={burger} alt="Burger Menu" />
    </nav>
  );
};

export default Navbar;
