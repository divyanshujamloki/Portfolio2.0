import React, { useEffect } from "react";
import { preLoaderAnim } from "../Animate/index";
import "./Preloader.scss"

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>1,</span>
        <span>2,</span>
        <span>3,</span>
        <span>Let's Go</span>
      </div>
    </div>
  );
};

export default PreLoader;