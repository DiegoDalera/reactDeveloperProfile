import React from "react";
import "./About.css";
import MiImagen from "../../assets/experiencia_img.jpg";

function About() {
  return (
    <div className="About">
      <h2>Mi experiencia</h2>

      <div className="experiencia">
        <img src={MiImagen} alt="Diego Dalera" className="img-experiencia" />
        <div className="exp-description">
          <p>
            Soy desarrollador web y licenciado en gestión educativa con más de
            20 años de experiencia en el campo de la tecnología y la educación.
            Nacido en Argentina en 1971, desde muy joven me gusto la informática
            y la programación, comenzando a desarrollar mis habilidades de forma
            autodidacta.
          </p>
          <p>
            En 2000,comencé a estudiar el profesorado en informática, ya que
            siempre había sentido una gran pasión por la educación y creía que
            podía contribuir significativamente al desarrollo de la misma en su
            país. Después de graduarme, comencé a trabajar como profesor de
            tecnología y diseño en una escuela secundaria. Al mismo tiempo,
            empece a trabajar como desarrollador web independiente, creando
            sitios web para pequeñas empresas y organizaciones no
            gubernamentales.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
