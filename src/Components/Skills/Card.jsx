import React from "react";
import './Card.css'

const Card = () => {
  return (
      <article class="card">
        <a href="#">
          <i class="fa-brands fa-html5 fa-2xl"> card icono</i>
          <div class="card_contenido">
            <h2 class="card_titulo">card titulo</h2>
            <p class="card_descripcion">
             card texto
            </p>
          </div>
        </a>
      </article>
  );
};

export default Card;
