import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import IridianImg from "./images/Iridian.jpg";

const About = () => {
  return (
    <Container style={{alignItems:"center", marginTop:100}}>
      <Row>
        <Col md={5}>
          <img
            src={IridianImg}
            alt="img of Iridian"
            className="img-fluid my-image"
            style={{
              borderRadius: "10%",
              height: 550,
              width: 450,
              objectFit: "cover",
            }}
          />
        </Col>
        <Col sm={5} style={{ textAlign: "justify" }}>
          <div className="text-container">
            <p className="fs-4">
              My name is Iridian Cisneros Vargas, and I am a passionate and
              dedicated web developer. I consider myself a person who thrives on
              challenges and constantly seeks new opportunities to learn and
              grow. As a web developer, I am driven by creativity and strategic
              thinking, and I take pride in my ability to effectively address
              clients' needs and expectations.
            </p>
            <p className="fs-4 ">
              I am passionate about improving professionally and sharing my
              knowledge with others. The digital world has provided me with a
              platform to do just that, and I am grateful for the opportunity to
              contribute to its continuous growth and evolution. I am confident
              that my skills and experience make me a valuable asset to any
              team, and I look forward to the opportunity to bring my expertise
              to your organization.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
