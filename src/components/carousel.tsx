import React from "react";

const Carousel: React.FC = () => {
  return (
    <div className="flex overflow-x-scroll space-x-4 p-4 bg-lightgrey">
      <div className="w-32 h-32 bg-darkgrey text-white flex items-center justify-center">
        Brand 1
      </div>
      <div className="w-32 h-32 bg-darkgrey text-white flex items-center justify-center">
        Brand 2
      </div>
    </div>
  );
};

export default Carousel;
