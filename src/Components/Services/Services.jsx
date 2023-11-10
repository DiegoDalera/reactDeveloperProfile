import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Services.css";

function Services() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="services" data-aos="zoom-in-down">
      <div className="services-title">
        <h2>Enviame tu consulta</h2>
      </div>
      <div className="service-text">
        <p className="service-p">
          Si necesitas hacerme cualquier consula sobre alguna
          aplicacion/desarrollo que quieras implemantar en tu negocio, no dudes
          en consultarme asi agendamos una reunion sin ningun cargo para charlar
          sobre tus ideas y/o solucionar tus problemas.
        </p>
      </div>
    </div>
  );
}

export default Services;
