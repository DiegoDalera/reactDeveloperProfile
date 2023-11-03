/* eslint-disable react/prop-types */
import "./Card_p.css";

const Card = ({ id, imageUrl, title, description, sourceLink }) => {
  return (
    <div className="item" id={id}>
      <img src={imageUrl} alt={title} />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="btn-github">
        <a href={sourceLink} className="button" target="blank">
          Ver Github
        </a>
      </div>
    </div>
  );
};

export default Card;
