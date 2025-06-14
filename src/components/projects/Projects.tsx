import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import "./projects.scss";
import { useTheme } from "../../context/ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";

interface ProjectsProps {}

export const projects = [
  {
    name: "Sign Language Translator",
    description:
      "Bridging communication gaps with vision and code. A real-time sign language recognition system using Python, OpenCV, and TensorFlow. This project leverages computer vision to interpret hand gestures and translate them into readable text, making communication more inclusive. Ideal for enhancing accessibility in digital interfaces and education.",
    image: "/sign-language.png",
    url: "https://github.com/shubanborkar/Sign-Language-Translator",
  },
  {
    name: "Zomato Review Sentiment Analyzer & Clustering Tool",
    description:
      "Where data meets dining decisions. Built with Python, NLP, and Unsupervised ML, this project analyzes Zomato restaurant reviews to determine customer sentiment and clusters restaurants based on cuisine, location, and ratings. It helps users explore patterns in food preferences and identify top-performing spots using K-Means clustering.",
    image: "/zomato-sentiment.png",
    url: "https://github.com/shubanborkar/Zomato-Review-Sentiment-Analysis-And-Restaurant-Clustering",
  },
  {
    name: "Loan Defaulter Prediction System",
    description:
      "Smart risk detection using machine learning. A predictive analytics tool developed with Flask, Logistic Regression, and AdaBoost to identify potential loan defaulters. This project processes applicant data to forecast default risk, helping financial institutions make informed lending decisions and reduce non-performing assets.",
    image: "/loan-defaulter.png",
    url: "https://github.com/shubanborkar/Loan-Defaulter-Prediction",
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
];

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const projectsToDisplay = location.pathname === "/" ? projects.slice(0, 3) : projects;

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
        <div className="projects">
          {projectsToDisplay.map((project, index) => (
            <ProjectCard
              projectName={project.name}
              image={project.image}
              description={project.description}
              key={project.name}
              link={project.url}
              index={index + 1}
            />
          ))}
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
    </div>
  );
};

export default Projects;
