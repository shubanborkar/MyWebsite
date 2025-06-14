import { useEffect } from "react";
import Hero from "../components/hero/Hero";
import Skills from "../components/skills/Skills";
import Education from "../components/education/Education";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import { motion, useIsPresent } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Home: React.FC = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const isPresent = useIsPresent();
  const { isDarkmode } = useTheme();
  const isMobile = window.innerWidth <= 820;

  return (
    <div className={`home ${isDarkmode ? "dark" : ""}`}>
      <Header />
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: isMobile ? 0 : 0.5, ease: "circOut" },
        }}
        exit={{
          scaleX: 1,
          transition: { duration: isMobile ? 0 : 0.5, ease: "circIn" },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className={
          isDarkmode ? "route-switch-screen-dark" : "route-switch-screen"
        }
      />
    </div>
  );
};

export default Home;
