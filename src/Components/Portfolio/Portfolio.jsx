import React from "react";
import "./Portfolio.css";
import Card_p from "./Card_p";
import portfolioData from "./portfolioData.json"; // Importa los datos

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <h2>Portfolio</h2>
      </div>

      <div className="cards">
        {portfolioData.map((project, index) => (
          <Card_p
            key={index}
            thumb={project.thumb}
            title={project.title}
            text={project.text}
            demoLink={project.demoLink}
            sourceLink={project.sourceLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
