import React, { useEffect } from "react";
import logo from '../assets/logo.png'
import { preLoaderAnim } from "../animations";
import './Preloader.css'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>
          <img src={logo} alt="" />
        </span>
      </div>
    </div>
  );
};

export default PreLoader;