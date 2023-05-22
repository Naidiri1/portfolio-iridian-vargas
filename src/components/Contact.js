import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <Container style={{ marginTop: "100px", fontSize: "60px" }}>
      <Row className="justify-content-center">
        <Col xs="auto">
          <ul
            className="contact-list"
            style={{ fontSize: "35px", listStyle: "none" }}
          >
            <li className="mb-5">
              <a href="https://www.linkedin.com/in/iridian-cisneros-vargas">
                <FaLinkedin size={50} style={{ marginRight: "10px" }} />
              </a>
              LinkedIn: Iridian Cisneros Vargas
            </li>
            <li className="mb-5">
              <a href="https://github.com/Naidiri1">
                <FaGithub size={50} style={{ marginRight: "10px" }} />
              </a>
              GitHub: Naidiri1
            </li>
            <li className="mb-5">
              <a href="mailto:iridian95@live.com">
                <FaEnvelope size={50} style={{ marginRight: "10px" }} />
              </a>
              Email: iridian95@live.com
            </li>
            <li>
              <a href="tel:+4439919079">
                <FaPhone size={50} style={{ marginRight: "10px" }} />
              </a>
              Phone: 443-991-9079
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
export default Contact;
