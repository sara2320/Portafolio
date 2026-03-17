import { useState, useEffect } from "react";
import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Proyects";
import DesignSection from "../components/portfolio/DesingnSection";
import GamesSection from "../components/portfolio/GamesSection";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

const SECTIONS = [
  "inicio",
  "sobre-mi",
  "habilidades",
  "proyectos",
  "diseno",
  "juegos",
  "contacto",
];

export default function Portfolio() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const observers = SECTIONS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3, rootMargin: "-60px 0px -40% 0px" },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar active={active} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DesignSection />
      <GamesSection />
      <Contact />
      <Footer />
    </div>
  );
}
