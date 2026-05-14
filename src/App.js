import React, { useEffect } from "react";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import { ThemeState } from "./Context/theme";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Header from "./Components/Header/Header";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import EducationAndCertification from "./Components/EducationAndCertification/EducationAndCertification";
import BlogAndResearch from "./Components/BlogAndResearch/BlogAndResearch";
import Highlights from "./Components/Highlights/Highlights";

function App() {
  const { themeMode } = ThemeState();

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");

      for (let i = 0; i < reveals.length; i += 1) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div
      id="top"
      className={
        themeMode === "light" ? `${themeMode} app lightbg` : `${themeMode} app`
      }
    >
      <Header />
      <main>
        <About />
        <Highlights />
        <WorkExperience />
        <Projects />
        <BlogAndResearch />
        <EducationAndCertification />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
