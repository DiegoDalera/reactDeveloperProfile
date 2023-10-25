import React from "react";
import "./Card.css";

const Card = ({ link, icono, titulo, descripcion }) => {
  return (
    <article class="card">
      <a href={link}>
        <i class={icono}></i>
        <div class="card_contenido">
          <h2 class="card_titulo">{titulo}</h2>
          <p class="card_descripcion">{descripcion}</p>
        </div>
      </a>
    </article>
  );
};

export default Card;
