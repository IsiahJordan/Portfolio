import React from "react";
import Header from "../components/Header.tsx";
import IntroSec from "../components/Intro.tsx";
import {BrandService, BrandWork} from "../components/BrandDetails.tsx";
import AboutSec from "../components/About.tsx";
import Skills from "../components/Skills.tsx";
import WorkList from "../components/Works.tsx";
import {scrollToSection} from "../utilities/animation.ts";
import {TabData} from "../utilities/types.ts";
import ContactModal from "../components/Contacts.tsx";
import {useState} from "react";
import Certificates from "../components/Certificate.tsx";
import Footer from "../components/Footer.tsx";


const Test: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const tabs_data: TabData[] = [
    { label: "home", action: () => scrollToSection("home")},
    { label: "about", action: () => scrollToSection("about")},
    { label: "skills", action: () => scrollToSection("skills")},
    { label: "works", action: () => scrollToSection("works")},
    { label: "contacts", action: () => setModalOpen(true)},
  ];
  return(
    <>
      <Header
        lastname="DIMAUNAHAN"
        tabs= {tabs_data}
      />
      <ContactModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
      <IntroSec/>
      <BrandService/>
      <AboutSec/>
      <Skills/>
      <BrandWork/>
      <WorkList/>
      <Certificates/>
      <Footer/>
    </>
  )
}

export default Test;
