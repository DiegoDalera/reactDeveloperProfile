import './About.css';
import { useState } from 'react';
import MiImagen from '../../assets/profile.jpg';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  const [mostrarMas, setMostrarMas] = useState(false);

  const textoCompleto = (
    <>
      <p>
        En 2000, comencé a estudiar el profesorado en informática, ya que
        siempre había sentido una gran pasión por la educación y creía que
        podía contribuir significativamente al desarrollo de la misma en su
        país. Después de graduarme, comencé a trabajar como profesor de
        tecnología y diseño en una escuela secundaria. Al mismo tiempo,
        empecé a trabajar como desarrollador web independiente, creando
        sitios web para pequeñas empresas y organizaciones no gubernamentales.
      </p>
      <p>
        A lo largo de los años, me he mantenido actualizado en las últimas
        tendencias y tecnologías en el campo del desarrollo web. Ha asistido
        a numerosos cursos y conferencias, y ha obtenido certificaciones en
        diversas áreas relacionadas con la tecnología y la educación. Hoy en
        día, a mis 52 años, sigo trabajando como desarrollador web y asesor
        de tecnología, y sigo teniendo una gran pasión por la educación.
        También me he convertido en un mentor para muchos jóvenes que
        quieren seguir una carrera en el campo de la tecnología, y he
        ayudado a muchos a encontrar su camino en este emocionante campo.
      </p>
    </>
  );

  const textoResumido = (
    <>
      <p className='text-resum' data-aos="fade-up">
        Soy desarrollador web y licenciado en gestión educativa con más de
        20 años de experiencia en el campo de la tecnología y la educación.
        Nacido en Argentina en 1971, desde muy joven me gustó la informática
        y la programación, comenzando a desarrollar mis habilidades de forma
        autodidacta...
      </p>
    </>
  );

  return (
    <div className="About">
      <h2>Sobre mi</h2>

      <div className="experiencia">
        <div className="neon-circle" data-aos="fade-right">
          <img src={MiImagen} alt="Diego Dalera" className="img-experiencia" />
        </div>

        <div className="desc-experiencia">
          {mostrarMas ? textoCompleto : textoResumido}
          <button className='btn-experiencia' onClick={() => setMostrarMas(!mostrarMas)}>
            {mostrarMas ? 'Leer menos...' : 'Leer más...'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;

