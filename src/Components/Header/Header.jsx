import "./Header.css";
import Navigation from "./Navigation";
import Redes from "./Redes";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <div className="hero-content h-100 ">
        <section className="quien_soy_info">
          <h1>Diego Dalera</h1>
          <h2>Licenciado en Gestion Educativa &amp; Desarrollador Web</h2>
          <div className="links-header">
            <Link to="footer" className="btn" smooth={true} duration={1000}>
              Contáctame
            </Link>
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
