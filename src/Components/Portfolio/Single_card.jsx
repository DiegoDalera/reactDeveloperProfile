/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './Single_card.css'

const Single_card = ({ imageUrl, title, description, onHide  }) => {
  return (
    <>
      <Modal show={true} onHide={onHide}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="slider-proyect">
            <img src={imageUrl} alt=""  className="proyect-img"/>
          </div>
        </Modal.Body>

        <div className="description-text">
          <p className="descriptioTextP">{description}</p>
        </div>

        <Modal.Footer>
          <Button onClick={onHide} variant="success">Success</Button>{" "}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Single_card;
