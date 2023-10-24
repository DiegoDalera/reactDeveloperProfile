import React from "react";
import "./Portfolio.css";
import Card from "./Card";

const Portfolio = () => {
  return (
    <div>
      <h2>My Proyects</h2>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Portfolio;
