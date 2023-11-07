
import "./Redes.css";
import { Github, Linkedin,Instagram } from "react-bootstrap-icons";

const Redes = () => {
  return (
    <>
      <section className="quien_soy_redes">
        <ul className="menu-redes">
          <li>
            <a href="https://github.com/DiegoDalera" target="_blank" rel="noreferrer">
            <Github className= "icons" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/diego-martin-dalera/"
              target="_blank" rel="noreferrer"
            >
              <Linkedin className= "icons"  />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/diegomartin.arg/"
              target="_blank" rel="noreferrer"
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
