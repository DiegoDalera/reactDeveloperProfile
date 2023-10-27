import React from "react";
import './Card_p.css'

const Card = ({ id, imageUrl, title, description }) => {
  return (
    <div className="item" id={id}>
      <img src={imageUrl} alt={title} />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="button">Learn More</div>
    </div>
  );
};

export default Card;