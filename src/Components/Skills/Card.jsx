/* eslint-disable react/prop-types */

import "./Card.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
const Card = ({ link, icono, titulo, descripcion }) => {
  const [mostrarCompleto, setMostrarCompleto] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const toggleMostrarCompleto = () => {
    setMostrarCompleto(!mostrarCompleto);
  };

  return (
    <div className="card" data-aos="fade-left">
      <div onClick={toggleMostrarCompleto}>
        <i className={icono}></i>
        <div className="card_contenido">
          <h2 className="card_titulo">{titulo}</h2>
          <p className="card_descripcion">
            {mostrarCompleto ? descripcion : descripcion.slice(0, 100)}
            {descripcion.length > 100 && !mostrarCompleto && (
              <span>... <button className="see-more" onClick={toggleMostrarCompleto}>Ver más</button></span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;


