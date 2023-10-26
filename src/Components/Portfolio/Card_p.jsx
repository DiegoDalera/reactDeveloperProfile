import React from "react";
import "./Card_p.css";

const Card_p = ({ thumb, title, text, demoLink, sourceLink }) => {
  return (
    <div className="card-porftfolio">
      <div className="card-thumbnail">
        <img src={thumb} alt="" className="proyect-card-thumb"/>
      </div>

      <div className="card-body">
        <div className="title card-title">{title}</div>

        <p className="card-text">{text}</p>

        <div className="btn-grp">
          <a href={demoLink}>Live Demo</a>
          <a href={sourceLink}>Source Code</a>
        </div>
      </div> 
    </div>
  );
};

export default Card_p;
