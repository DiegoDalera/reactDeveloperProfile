import React from "react";
import "./Redes.css";
import { Github, Linkedin,Instagram } from "react-bootstrap-icons";

const Redes = () => {
  return (
    <>
      <section className="quien_soy_redes">
        <ul className="menu-redes">
          <li>
            <a href="https://github.com/DiegoDalera" target="_blank">
            <Github className= "icons" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/diego-martin-dalera/"
              target="_blank"
            >
              <Linkedin className= "icons"  />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/diegomartin.arg/"
              target="_blank"
            >
              <Instagram className= "icons"  />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Redes;
