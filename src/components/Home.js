import React from "react";
import { Container } from "react-bootstrap";
import Work from "./Work"
const fontSize={
  fontSize:26
}

const Home = () => {
  return (
    <Container fluid style={{paddingLeft:"0px", paddingRight:"0px"}}>
      <div  className="bg--img" >
      <div className=" text-center px-2 ">
        <h1 className="fw-bold mt-5 mb-5" style={{ fontSize: 40 }}>Web Developer</h1>
        <p className="fw-bold" style={fontSize}>
          Hey there! Welcome to my portfolio! My name is Iridian Cisneros
          Vargas.
        </p>
        <p className="fw-bold" style={fontSize}> A passionate and dedicated web developer with a strong desire
          to create exceptional digital experiences.
        </p>
        <Work/>
      </div>
      </div>
    </Container>
  );
};
export default Home;




