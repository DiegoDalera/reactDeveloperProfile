import React from "react";
import './Card_p.css'

const Card = ({ id, imageUrl, title, description, sourceLink }) => {
  return (
    <div className="item" id={id}>
      <img src={imageUrl} alt={title} />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <a href={sourceLink} class="button" target="blank">Ver Github</a>
    </div>
  );
};

export default Card;