import React from "react";
import NavBar from "./components/Navbar/Navbar";
import {  Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer"


const App = () => {
  return (
  <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </>
  );
};

export default App;