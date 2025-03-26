import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import EmailSidebar from "./components/EmailSidebar";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] relative">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <SocialSidebar />
        <EmailSidebar />
        <main className="pt-16 pb-32 md:pt-24 flex flex-col items-center">
          <Home />
          <About />
          <Experience />
          <Skills />
        </main>
      </div>
      <Contact />
    </div>
  );
}

export default App;
