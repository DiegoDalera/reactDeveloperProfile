/* eslint-disable react/prop-types */

import "./Card.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ link, icono, titulo, descripcion }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <article className="card" data-aos="fade-left">
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
