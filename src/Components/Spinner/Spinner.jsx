import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import "./Spinner.css";

const Spinner = ({ loading }) => {
    const spinnerClass = loading ? '' : 'hidden'; 
  
    return (
      <div className={`spinner ${spinnerClass}`}>
        <InfinitySpin width="300" color="#4fa94d" />;
      </div>
    );
  };
  

export default Spinner;
