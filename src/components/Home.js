import React from "react";
import { Container } from "react-bootstrap";
import imgHome from "./images/home.jpg";

const Home = () => {
  return (
    <Container fluid className="home-page position-relative p-0">
      <img className="img-fluid" src={imgHome} alt="computer and keyboard"
        style={{ width: "100%", height: "900px", filter: "contrast(60%)" }}/>
      <div className="position-absolute top-50 start-50 translate-middle text-center px-2">
        <h1 className="fw-bold" style={{ fontSize: 40 }}>Web Developer</h1>
        <p className="fw-bold " style={{ fontSize: 26}}>
          Hey there! Welcome to my portfolio! My name is Iridian Cisneros
          Vargas, a passionate and dedicated web developer with a strong desire
          to create exceptional digital experiences.
        </p>
      </div>
    </Container>
  );
};
export default Home;




