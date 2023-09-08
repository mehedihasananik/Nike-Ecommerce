import React from "react";

const Social = ({ icon }) => {
  return (
    <div className="text-black w-8 h-8">
      <img className="w-full h-full" src={icon} alt="icon" />
    </div>
  );
};

export default Social;
