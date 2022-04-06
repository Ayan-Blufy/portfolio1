import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";



function App() {

  return (
    <>

      <Navbar />
      <>
        <Home />
        <About />
        <Skills />
        <Contact />
      </>
      
    </>
  );
}

export default App;
