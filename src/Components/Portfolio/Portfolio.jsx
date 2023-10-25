import React from "react";
import "./Portfolio.css";
import anto from "../../assets/proyectos/Anto.jpg";
import Card_p from "./Card_p";

const Portfolio = () => {
  return (
    <div>
      <h2>My Proyects</h2>
      
      <div className="cards">
        <Card_p
          thumb={anto}
          title={"texto"}
          text={"texto descripcion"}
          demoLink={"https://antoslashes.vercel.app/"}
          sourceLink={"https://github.com/DiegoDalera/turneroEstetica"}
        />

        <Card_p
          thumb={anto}
          title={"texto"}
          text={"texto descripcion"}
          demoLink={"https://antoslashes.vercel.app/"}
          sourceLink={"https://github.com/DiegoDalera/turneroEstetica"}
        />

        <Card_p
          thumb={anto}
          title={"texto"}
          text={"texto descripcion"}
          demoLink={"https://antoslashes.vercel.app/"}
          sourceLink={"https://github.com/DiegoDalera/turneroEstetica"}
        />

        <Card_p
          thumb={anto}
          title={"texto"}
          text={"texto descripcion"}
          demoLink={"https://antoslashes.vercel.app/"}
          sourceLink={"https://github.com/DiegoDalera/turneroEstetica"}
        />

        <Card_p
          thumb={anto}
          title={"texto"}
          text={"texto descripcion"}
          demoLink={"https://antoslashes.vercel.app/"}
          sourceLink={"https://github.com/DiegoDalera/turneroEstetica"}
        />

        <Card_p
          thumb={anto}
          title={"texto"}
          text={"texto descripcion"}
          demoLink={"https://antoslashes.vercel.app/"}
          sourceLink={"https://github.com/DiegoDalera/turneroEstetica"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
