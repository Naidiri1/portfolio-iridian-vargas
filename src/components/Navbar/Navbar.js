import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const navStyling={
  color:"#2121bf",
  marginLeft:"80px"}
  
const NavBar = () => {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    const root = window.document.body;
    root.classList.remove(mode === "dark" ? "light-mode" : "dark-mode");
    root.classList.add(mode === "dark" ? "dark-mode" : "light-mode");
  }, [mode]);
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light")};
  return (
    <Navbar collapseOnSelect expand="lg" style={{ fontSize: 30, justifyContent: "right", alignContent: "center" }}>
      <Container>
        <Navbar.Brand href="/">
          <div className="logo-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <img src={logo} alt="logo" width="50" height="50" />
            <h1 style={{ fontSize: 22, color: "#0d6efd", marginLeft: 13 }}>
              Iridian Cisneros Vargas
            </h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" style={{ background: "#969390" }}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navlinks">
            <Nav.Link href="/" style={navStyling}>
              Home
            </Nav.Link>
            <Nav.Link href="/about-me" style={navStyling}>
              About Me
            </Nav.Link>
            <Nav.Link href="/work" style={navStyling}>
              Work
            </Nav.Link>
            <Nav.Link href="/contact" style={navStyling}>
              Contact Me
            </Nav.Link>
            <Nav.Link>
              <div className={`app ${ mode === "dark" ? "dark-mode" : "light-mode"}`} >
             </div>
              <Button className="dark-light" onClick={toggleMode} style={{ marginLeft: 90 }}>
                <FontAwesomeIcon icon={mode === "light" ? faMoon : faSun} />
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
