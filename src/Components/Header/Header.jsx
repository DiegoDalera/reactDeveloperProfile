import "./Header.css";
import Navigation from "./Navigation";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <>
      <div className="hero-content h-100 ">
        <section className="quien_soy_info">
          <div className="content">
            <h1>Diego Dalera</h1>
            <h2>
              Licenciado en Gestion Educativa &amp; Desarrollador Web
              <span>&#160;</span>
            </h2>
          </div>
          <div className="links-header">
            <Link to="footer" className="btn" smooth={true} duration={1000}>
              Contáctame
            </Link>
            <a
              href="/assets/cvDiegoDalera.pdf"
              className="btn"
              target="_blank"
            >
              CV
            </a>
          </div>
        </section>
     
      </div>

      <div className="header">
        <Navigation />
      </div>
    </>
  );
};

export default Header;
