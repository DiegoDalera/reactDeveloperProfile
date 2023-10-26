import React from "react";
import "./Header.css";
import Navigation from "./Navigation";
import Redes from "./Redes";

const Header = () => {
  return (
    <>
      <div className="hero-content h-100 ">
        <section className="quien_soy_info">
          <h1>Diego Dalera</h1>
          <h2>Licenciado en Gestion Educativa &amp; Desarrollador Web</h2>
          <div className="links-header">
            <a className="btn" href="/pages/contacto">
              Contactame
            </a>
            <a
              href="archivos/cvDiegoDalera.pdf"
              className="btn"
              target="_blank"
            >
              CV
            </a>
          </div>
        </section>
        <Redes />
      </div>

      <div className="header">
        <Navigation />
      </div>
    </>
  );
};

export default Header;
