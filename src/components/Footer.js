import React from "react";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-center  py-5">
      <Container style={{ marginTop: "150px" }}>
        <a href="https://www.linkedin.com/in/iridian-cisneros-vargas" >
          <FaLinkedin size={35} style={{ marginRight: "30px" }}/>
        </a>
        <a href="https://github.com/Naidiri1">
          <FaGithub size={35} style={{ marginRight: "30px" }} />
        </a>
        <a href="mailto:iridian95@live.com">
          <FaEnvelope size={35} />
        </a>
        <h3>© 2023 My Portfolio. All rights reserved.</h3>
      </Container>
    </footer>
  );
}
export default Footer;