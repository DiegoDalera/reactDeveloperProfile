import React from "react";
import "./About.css";
import MiImagen from "../../assets/experiencia_img.jpg";

function About() {
  return (
    <div className="About">
      <h2>Sobre mi</h2>

      <div className="experiencia">
        <img src={MiImagen} alt="Diego Dalera" className="img-experiencia" />
        <div className="desc-experiencia">
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
          <p>
            Después de graduarme, comencé a trabajar como profesor de tecnología
            y diseño en una escuela secundaria. Al mismo tiempo, empece a
            trabajar como desarrollador web independiente, creando sitios web
            para pequeñas empresas y organizaciones no gubernamentales.
          </p>
          <p>
            A lo largo de los años, me he mantenido actualizado en las últimas
            tendencias y tecnologías en el campo del desarrollo web. Ha asistido
            a numerosos cursos y conferencias, y ha obtenido certificaciones en
            diversas áreas relacionadas con la tecnología y la educación. Hoy en
            día, a mis 52 años,sigo trabajando como desarrollador web y asesor
            de tecnología, y sigue teniendo una gran pasión por la educación.
            También se ha convertido en un mentor para muchos jóvenes que
            quieren seguir una carrera en él campo de la tecnología, y ha
            ayudado a muchos a encontrar su camino en este emocionante campo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
