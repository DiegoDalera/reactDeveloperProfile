import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div class="card">

      <div class="card-thumbnail">
        thumb
      </div>

      <div class="card-body">
        <div class="title card-title">CRWN CLOTHING</div>

        <p class="card-text">
          A React E-commerce Progressive Web App which has Authentication,
          Database, CRUD, Payment features.
        </p>

        <div class="btn-grp">
          <a>Live Demo</a>
          <a>Source Code</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
