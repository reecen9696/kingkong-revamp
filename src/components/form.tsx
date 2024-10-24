import React from "react";

const Form: React.FC = () => {
  return (
    <div className="relative w-full max-w-md">
      <div className="flex">
        <input
          type="text"
          placeholder="Enter your email here"
          className="w-full p-4 rounded-l-lg border border-gray-300 focus:outline-none"
        />
        <button className="bg-green font-extrabold  text-darkgrey px-4 rounded-r-lg hover:bg-green-600">
          Do it
        </button>
      </div>
    </div>
  );
};

export default Form;
