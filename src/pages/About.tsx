import { useEffect } from "react";
import AboutMe from "../components/about-me/AboutMe";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import PageHero from "../components/page-hero/PageHero";
import Skills from "../components/skills/Skills";
import Education from "../components/education/Education";
import { motion, useIsPresent } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isPresent = useIsPresent();
  const { isDarkmode } = useTheme();
  const isMobile = window.innerWidth <= 820;
  return (
    <div>
      <Header />
      <PageHero
        pageHeading="About Me"
        extraText="A data-driven mind with a designer's eye. Goan roots, Mumbai hustle — I build meaningful digital experiences, one insight at a time."
      />
      <AboutMe />
      <Skills />
      <Education />
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

export default About;
