import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import "./projects.scss";
import { useTheme } from "../../context/ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

interface ProjectsProps {}

export const projects = [
  {
    name: "Zomato Review Sentiment Analyzer & Clustering Tool",
    description:
      "Where data meets dining decisions. Built with Python, NLP, and Unsupervised ML, this project analyzes Zomato restaurant reviews to determine customer sentiment and clusters restaurants based on cuisine, location, and ratings. It helps users explore patterns in food preferences and identify top-performing spots using K-Means clustering.",
    image: "/zomato-sentiment.png",
    url: "https://github.com/shubanborkar/Zomato-Review-Sentiment-Analysis-And-Restaurant-Clustering",
    deployedLink: "https://zomato-sentiment-analysis.vercel.app/",
  },
  {
    name: "Loan Defaulter Prediction Model",
    description:
      "Smart risk detection using machine learning. A predictive analytics tool developed with Flask, Logistic Regression, and AdaBoost to identify potential loan defaulters. This project processes applicant data to forecast default risk, helping financial institutions make informed lending decisions and reduce non-performing assets.",
    image: "/loan-defaulter.png",
    url: "https://github.com/shubanborkar/Loan-Defaulter-Prediction",
    deployedLink: "https://loan-defaulter-prediction.vercel.app/",
  },
  {
    name: "Superstore Dashboard - Tableau",
    description:
      "This Tableau dashboard uncovers key trends from a Indian superstore dataset, spotlighting regional sales performance, customer behavior, and product category insights. It highlights KPIs like total orders, sales, and customer count across years. It empowers decision-makers to track performance shifts, identify growth opportunities, and optimize inventory planning based on actionable data.",
    image: "/dashboard-preview.jpeg",
    url: "https://github.com/shubanborkar/Superstore-Dashboard-Tableau",
    deployedLink: "https://public.tableau.com/app/profile/shuban.borkar/viz/SuperStoreDashboard_17543406711030/Dashboard1#1",
  },
  {
    name: "PathFinder AI",
    description:
      "PathFinder is a smart career recommendation system that uses Large Language Models (LLMs) and prompt engineering to suggest ideal career paths based on a student's interests, academic scores, and hobbies. The tool provides personalized suggestions and role explanations—bridging the gap between potential and possibilities with AI-driven clarity.",
    image: "Pathfinder.jpeg",
    url: "https://github.com/shubanborkar/PathFinder",
    deployedLink: "https://pathfinder1-bysborkar.streamlit.app/",
  },
  {
    name: "Carbon Footprint Prediction",
    description:
      "This machine learning project estimates the carbon footprint of companies based on operational data using a regression model built with PyTorch. By analyzing various variables the model helps forecast CO₂ emissions. It enables businesses to assess their sustainability impact, set reduction goals, and make data-driven decisions aligned with climate responsibility.",
    image: "/Carbon-Footprint.jpeg",
    url: "https://github.com/shubanborkar/Carbon-Footprint-Prediction",
    deployedLink: "https://carbon-footprint-prediction.streamlit.app/#carbon-footprint-prediction",
  },
  {
    name: "Job Sequencing Visualizer",
    description:
      "Optimizing tasks, one job at a time. This project implements the Greedy Algorithm for job sequencing to maximize profit, wrapped in a user-friendly Tkinter GUI. Users can input job parameters, visualize optimal sequences, and understand how algorithmic scheduling works in real time — a perfect blend of theory and interactivity.",
    image: "/job-sequencing.png",
    url: "https://github.com/shubanborkar/Job-Sequencing-Program-with-GUI",
  },
  {
    name: "Language Translator with GUI",
    description:
      "Breaking language barriers with Python. A simple yet effective translator built using Tkinter and Googletrans. This project lets users translate text across multiple languages through a clean, intuitive interface. It demonstrates the power of APIs and Python's flexibility in creating real-world utility tools.",
    image: "/language-translator.png",
    url: "https://github.com/shubanborkar/Python-Language-Translator-with-GUI",
  },
  {
    name: "Sign Language Translator",
    description:
      "Bridging communication gaps with vision and code. A real-time sign language recognition system using Python, OpenCV, and TensorFlow. This project leverages computer vision to interpret hand gestures and translate them into readable text, making communication more inclusive. Ideal for enhancing accessibility in digital interfaces and education.",
    image: "/sign-language.png",
    url: "https://github.com/shubanborkar/Sign-Language-Translator",
  },
];

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projectsToDisplay = location.pathname === "/" ? projects.slice(0, 3) : projects;

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      // Different card dimensions for home page vs works page
      const cardWidth = location.pathname === "/" ? 400 : 450; // Updated home page card width
      const gap = location.pathname === "/" ? 24 : 32; // Smaller gap on home page (1.5rem vs 2rem)
      const scrollPosition = index * (cardWidth + gap);
      
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
    setActiveIndex(index);
  };

  const scrollLeft = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(projectsToDisplay.length - 1, activeIndex + 1);
    scrollToIndex(newIndex);
  };

  // Start with first card as leftmost
  useEffect(() => {
    if (carouselRef.current && projectsToDisplay.length > 0) {
      const cardWidth = location.pathname === "/" ? 400 : 450; // Updated home page card width
      const gap = location.pathname === "/" ? 24 : 32; // Different gaps for home vs works
      
      // Start with first card (index 0) as the leftmost visible card
      const startIndex = 0; // First card (Zomato)
      const scrollPosition = startIndex * (cardWidth + gap);
      
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      
      setActiveIndex(startIndex);
    }
  }, [projectsToDisplay.length, location.pathname]);

  // Add scroll event listener to check scroll position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollPosition);
      // Initial check
      checkScrollPosition();
      
      return () => {
        carousel.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  return (
    <div
      className={theme.isDarkmode ? "projectContainerDark" : "projectContainer"}
    >
      <div
        className={theme.isDarkmode ? "projectWrapperDark" : "projectWrapper"}
      >
        {location.pathname === "/" && (
          <SectionHeading sectionName="Featured Works" />
        )}
        
        <div className={`carousel-container${location.pathname === "/" ? " featured-carousel" : ""}`}>
          {location.pathname !== "/" && (
            <button
              className={`carousel-btn carousel-btn-left ${theme.isDarkmode ? 'btn-dark' : 'btn-light'}`}
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              style={{ opacity: canScrollLeft ? 1 : 0.3, pointerEvents: canScrollLeft ? 'auto' : 'none' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
          )}

          <div className="carousel-track" ref={carouselRef}>
            <div className="carousel-content">
              {projectsToDisplay.map((project, index) => (
                <ProjectCard
                  projectName={project.name}
                  image={project.image}
                  description={project.description}
                  key={project.name}
                  link={project.url}
                  deployedLink={project.deployedLink}
                  index={index + 1}
                  isHomePage={location.pathname === "/"}
                />
              ))}
            </div>
          </div>

          {location.pathname !== "/" && (
            <button
              className={`carousel-btn carousel-btn-right ${theme.isDarkmode ? 'btn-dark' : 'btn-light'}`}
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              style={{ opacity: canScrollRight ? 1 : 0.3, pointerEvents: canScrollRight ? 'auto' : 'none' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          )}
        </div>
        
        {location.pathname === "/" && (
          <div className="viewMoreContainer">
            <button 
              className={theme.isDarkmode ? "viewMoreButtonDark" : "viewMoreButton"}
              onClick={() => navigate("/works")}
            >
              View More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
