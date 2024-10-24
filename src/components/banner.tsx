import React from "react";
import star from "../assets/icons/star.svg";

const ScrollingBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden h-28 bg-green">
      <div className="absolute top-0 left-0 w-[200%] h-full animate-marquee flex items-center">
        <div className="whitespace-nowrap flex items-center">
          <span className="text-darkgrey font-extrabold text-7xl mr-8">
            BRANDING
          </span>
          <img src={star} alt="Icon" className="w-8 mr-8" />
          <span className="text-darkgrey font-extrabold text-7xl mr-8">
            SEO
          </span>
          <img src={star} alt="Icon" className="w-8 mr-8" />
          <span className="text-darkgrey font-extrabold text-7xl mr-8">
            ADVERTISING
          </span>
          <img src={star} alt="Icon" className="w-8 mr-8" />
          <span className="text-darkgrey font-extrabold text-7xl mr-8">
            BRANDING
          </span>
          <img src={star} alt="Icon" className="w-8 mr-8" />
          <span className="text-darkgrey font-extrabold text-7xl mr-8">
            SEO
          </span>
          <img src={star} alt="Icon" className="w-8 mr-8" />
          <span className="text-darkgrey font-extrabold text-7xl mr-8">
            ADVERTISING
          </span>
          <img src={star} alt="Icon" className="w-8 mr-8" />
          <span className="text-darkgrey font-extrabold text-7xl mr-8">
            BRANDING
          </span>
          <img src={star} alt="Icon" className="w-8 mr-8" />
          <span className="text-darkgrey font-extrabold text-7xl mr-8">
            SEO
          </span>
          <img src={star} alt="Icon" className="w-8 mr-8" />
          <span className="text-darkgrey font-extrabold text-7xl mr-8">
            ADVERTISING
          </span>
          <img src={star} alt="Icon" className="w-8 mr-8" />
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
