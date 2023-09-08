import React from "react";

const Clips = ({ clip, imgsrc }) => {
  return (
    <div>
      <div>
        <img className="w-20" src={imgsrc} alt="" />
      </div>
    </div>
  );
};

export default Clips;
