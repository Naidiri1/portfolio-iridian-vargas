import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center "
      style={{ marginTop: "200px" ,  fontSize: "60px"}}>
      <h1 style={{ fontSize: "40px"}}>Contact me:</h1>
      <Row className="justify-content-center">
        <Col xs="auto">
          <ul
            className="contact-list"
            style={{ fontSize: "40px", textAlign: "left", listStyle: "none" }}>
            <li className="mb-5">
              <a href="https://www.linkedin.com/in/iridian-cisneros-vargas">
                <FaLinkedin size={35} style={{ marginRight: "10px" }} />
              </a>
              Connect with me
            </li>
            <li className="mb-5">
              <a href="https://github.com/Naidiri1">
                <FaGithub size={35} style={{ marginRight: "10px" }} />
              </a>
              Check out my projects
            </li>
            <li className="mb-5">
              <a href="mailto:iridian95@live.com">
                <FaEnvelope size={35} style={{ marginRight: "10px" }} />
              </a>
              Email me for a chat
            </li>
            <li className="mb-5">
              <a href="tel:+4439919079">
                <FaPhone size={35} style={{ marginRight: "10px" }} />
              </a>
              Call me
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
export default Contact;
