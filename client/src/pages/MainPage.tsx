import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/Intro";
import AboutMe from "../components/About";
import SkillsSection from "../components/Skills";
import ProjectsSection from "../components/Works";
import CertificatesSection from "../components/Certs";
import Footer from "../components/Footer";


const Main: React.FC = () => {
  return(
    <>
      <NavBar/>
      <HeroSection/>
      <AboutMe/>
      <SkillsSection/>
      <ProjectsSection/>
      <CertificatesSection/>
      <Footer/>
    </>
  )
}

export default Main;

