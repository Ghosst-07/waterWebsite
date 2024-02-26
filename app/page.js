// Home.jsx
"use client";
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import FirstContainer from "./components/FirstContainer";
import Qualitycard from "./components/Qualitycard";
import Photo from "./components/Photo";
import Footer from "./components/Footer";
import Brands from "./components/Brands";

export default function Home() {
  const qualityCardRef = useRef();

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Navbar scrollToSection={scrollToSection} />
      <FirstContainer />
      <Qualitycard ref={qualityCardRef} />
      <Photo />
      <Brands />
      <Footer />
    </main>
  );
}
