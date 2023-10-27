import React from "react";
import "./Portfolio.css";
import Card from "./Card_p"; // Importa el nuevo componente
import portfolioData from "./portfolioData.json"; // Importa los datos

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <h2>Portfolio</h2>
      </div>

      <section>
        <div className="container">
          {portfolioData.map(project => (
            <Card
              key={project.id}
              id={project.id}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
