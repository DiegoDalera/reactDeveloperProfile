/* eslint-disable react/prop-types */
import "./Card_p.css";

const Card = ({ imageUrl, title, description, sourceLink }) => {
  return (
    <div className="col-md-4">
      <div className="work-box">
        <a
          href="#"
          data-gallery="portfolioGallery"
          className="portfolio-lightbox"
        >
          <div className="work-img">
            <img src={imageUrl} alt={title} className="img-fluid" />
          </div>
        </a>

        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="w-title">{title}</h2>
              <div className="w-more">
                <span className="w-description">{description}</span> /
              </div>
            </div>
            <div className="col-sm-4">
              <div className="w-like">
                <div className="github-link">
                  <a href={sourceLink} target="blank">
                    <span className="fa-brands fa-github"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
