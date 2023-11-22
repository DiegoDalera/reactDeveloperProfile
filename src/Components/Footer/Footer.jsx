import "./Footer.css";
import { Github, Linkedin, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-info">
        <h2>Diego Dalera</h2>

        <div className="footer-menu">
          <p>CABA - Argentina</p>
          <p>011-59738326 - dmdalera@gmail.com</p>
        </div>
      </div>

      <ul className="redes_sociales">
        <li>
          <a
            href="https://github.com/DiegoDalera"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="footer-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/diego-martin-dalera/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="footer-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/diegomartin.arg"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="footer-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
