import { useCallback } from "react";
import Socials from "../socials/Socials";
import "./hero.scss";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "../../context/ThemeContext";
import type { Engine } from "tsparticles-engine";

interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = () => {
  const theme = useTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const isMobile = window.innerWidth <= 820;

  return (
    <div className="hero-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 1000,
          fullScreen: { enable: false },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 5,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: theme.isDarkmode ? "#606874" : "#a6c0ea",
            },
            links: {
              color: theme.isDarkmode ? "#606874" : "#a6c0ea",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1500,
              },
              value: isMobile ? 50 : 100,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: isMobile ? false : true,
        }}
      />
      <div className={theme.isDarkmode ? "heroContainerDark" : "heroContainer"}>
        <div className="heroWrapper">
          <div className="leftHero">
            <p className="hello">
              Hello <span className="wave">👋</span>
            </p>
            <h2 className="name">I'm Shuban Borkar</h2>
            <p className="extraDetails">
              Aspiring Data Science Intern skilled in Python, Machine Learning, and EDA. Experienced in building Flask APIs and deploying cloud-ready solutions. Currently pursuing BE in AI & Data Science at TSEC Mumbai.
            </p>
            <div className="résuméContainer">
              <a className="résumé" href="/Résumé.pdf" target="_blank" rel="noopener noreferrer">
                <button className="button">
                  <span className="button__content">View My Résumé</span>
                </button>
              </a>
            </div>
            <div className="socials">
              <Socials />
            </div>
          </div>
          <div className="rightHero">
            <img
              src="/Shuban Image.png"
              alt="Shuban Borkar"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
