import React, { useState } from "react";
import { Card, CardImg, Button, Modal } from "react-bootstrap";

const PortfolioTemplate = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const renderModalFeatures=()=>{
  return (props.modalFeaturesApp.map((feature,idx) => <li key={idx}>{feature}</li>))}
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        textAlign: "center",
        alignContent: "center",
        margin: "20px",
      }}>
      <div>
        <h1 className="text-center mb-3">{props.name}</h1>
        <a href={props.link}>
          <CardImg
            src={props.imgSrc}
            style={{ height: "300px"}}/>
        </a>
        <Card.Body>
          <Card.Text style={{ margin: "10px", textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        </Card.Body>
      </div>
      <Button className="me-2 mb-2" onClick={() => handleShow()}>
        More about this project
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ color: "black" }}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {props.modalContent}
          <img
            style={{ width: "100%" }}
            src={props.imgSrc}
            alt="movie project"/>
          <ul>
         {renderModalFeatures()}
          </ul>
          <img
            style={{ width: "100%" }}
            src={props.modalImgApp}
            alt="apps images"/>
          <button className="mt-3" style={{background:"#0d6efd", border:"none"}}>
          <a href={props.modalRepolink} style={{textDecoration:"none",  color:"white", margin:"3px"}}>Github Repository</a>
          </button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default PortfolioTemplate;
