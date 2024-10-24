import React from "react";
import Banner from "./banner";
import Man from "../assets/man.png";
import VideoSection from "./videosection";
import Form from "../components/form";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-yellow w-screen flex justify-center items-center">
      <div className="absolute z-30 w-screen flex justify-center -top-20">
        <Form />
      </div>
      <div className="absolute w-full transform rotate-3 top-0 z-20">
        <Banner />
      </div>
      <div className="absolute z-10 w-screen flex justify-center">
        <img className="w-[600px]" src={Man} alt="man image" />
      </div>

      <div className="absolute w-full transform -rotate-3 top-0 z-0">
        <Banner />
      </div>
    </div>
  );
};

export default Hero;
