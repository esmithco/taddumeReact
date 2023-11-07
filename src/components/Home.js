import React from "react";
import "../styles/Home.css";
import { HomeHeader } from "./HomeHeader";
import { ButtonPrimary } from "./ButtonPrimary";
import { MenuHeader } from "./MenuHeader";
import { HomeNews } from "./HomeNews";
import { images } from "../assets/images";
import { LearnSection } from "./LearnSection";
import { AccompanimentSection } from "./AccompanimentSection";
import { StorySection } from "./StorySection";
import { PriceSection } from "./PriceSection";
import { Footer } from "./Footer";

function Home() {
  return (
    <>
      <HomeHeader img={images.imgColorLogo}>
        <MenuHeader />
        <div className="header-buttons">
          <a className="header-a">Ingresar</a>
          <ButtonPrimary text="Crear cuenta" />
        </div>
      </HomeHeader>
    
      <HomeNews />
      <LearnSection />
      <div className="home-divMancha1"><img className="home-divMancha1--img" src={images.imgMancha1} alt="" /></div>
      <AccompanimentSection />
      <img className="homeMancha2" src={images.imgMancha2} alt="" />
      <StorySection />
      <div className="home-divMancha3"><img className="home-divMancha3--img" src={images.imgMancha3} alt="" /></div>
      <PriceSection />
      <img className="homeMancha4" src={images.imgMancha4} alt="" />
      <Footer />
    </>
  );
}

export { Home };
