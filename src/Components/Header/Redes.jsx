import React from "react";
import './Redes.css'

const Redes = () => {
  return (
    <>
      <section className="quien_soy_redes">
        <ul className="redes">
          <li>
            <a href="https://github.com/DiegoDalera" target="_blank">
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/diego-martin-dalera/"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/diegomartin.arg/"
              target="_blank"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Redes;
