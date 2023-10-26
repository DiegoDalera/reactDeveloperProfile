import React from "react";
import "./Card.css";

const Card = ({ link, icono, titulo, descripcion }) => {
  return (
    <article className="card">
      <a href={link}>
        <i className={icono}></i>
        <div className="card_contenido">
          <h2 className="card_titulo">{titulo}</h2>
          <p className="card_descripcion">{descripcion}</p>
        </div>
      </a>
    </article>
  );
};

export default Card;
