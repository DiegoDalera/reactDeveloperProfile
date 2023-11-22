import "./Portfolio.css";
import Card from "./Card_p"; 
import portfolioData from "./portfolioData.json"; 

const Portfolio = () => {
  return (
    <div className="portfolio">

      <div className="portfolio-title">
        <h2>Portfolio</h2>
      </div>

      <div className="row">
      {portfolioData.map((data) => (
            <Card
              key={data.id}
              id={data.id}
              imageUrl={data.imageUrl}
              title={data.title}
              description={data.description}
              sourceLink={data.sourceLink}
            />
          ))}

      </div>
    </div>
  );
};

export default Portfolio;
