import React from "react";
import './Redes.css'

const Redes = () => {
  return (
    <>
      <section className="quien_soy_redes">
        <ul className="menu-redes">
          <li>
            <a href="https://github.com/DiegoDalera" target="_blank">
              <i className="bi bi-github">git</i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/diego-martin-dalera/"
              target="_blank"
            >
              <i className="bi bi-linkedin">link</i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              <i className="bi bi-twitter">twii</i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/diegomartin.arg/"
              target="_blank"
            >
              <i className="bi bi-instagram">inst</i>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Redes;
