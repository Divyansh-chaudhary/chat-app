import React from "react";
import "./index.scss";

const CubeLoading = () => {
  return (
    <div className="container">
      <div className="cube">
        <div className="sides">
          <div className="top"></div>
          <div className="right"></div>
          <div className="bottom"></div>
          <div className="left"></div>
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
    </div>
  );
};

export default CubeLoading;
