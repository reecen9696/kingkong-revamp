import React from "react";
import Boltimg from "../assets/bolt.svg";

const Bolt: React.FC = () => {
  return (
    <img src={Boltimg} alt="Bolt" className="w-24 animate-shake absolute" />
  );
};

export default Bolt;
