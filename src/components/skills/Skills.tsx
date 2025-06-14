import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./skills.scss";
import {
  PythonLogo,
  SQLLogo,
  HTMLLogo,
  CSSLogo,
  NumPyLogo,
  PandasLogo,
  ScikitLearnLogo,
  MatplotlibLogo,
  SeabornLogo,
  TensorFlowLogo,
  KerasLogo,
  OpenCVLogo,
  JupyterLogo,
  GoogleColabLogo,
  GitLogo,
  GoogleCloudLogo,
  FlaskLogo,
  VSCodeLogo,
  TableauLogo,
  MySQLLogo,
  SQLiteLogo,
  PhotoshopLogo,
  IllustratorLogo,
  PremiereProLogo,
  AfterEffectsLogo,
  BlenderLogo,
  CanvaLogo,
} from "../../assets/skill-logos";

const Skills = () => {
  const { isDarkmode } = useTheme();

  const programmingLanguages = [
    { name: "Python", icon: <img src={PythonLogo} alt="Python" /> },
    { name: "SQL", icon: <img src={SQLLogo} alt="SQL" /> },
    { name: "HTML", icon: <img src={HTMLLogo} alt="HTML" /> },
    { name: "CSS", icon: <img src={CSSLogo} alt="CSS" /> },
  ];

  const dataScienceML = [
    { name: "NumPy", icon: <img src={NumPyLogo} alt="NumPy" /> },
    { name: "Pandas", icon: <img src={PandasLogo} alt="Pandas" /> },
    { name: "Scikit-learn", icon: <img src={ScikitLearnLogo} alt="Scikit-learn" /> },
    { name: "Matplotlib", icon: <img src={MatplotlibLogo} alt="Matplotlib" /> },
    { name: "Seaborn", icon: <img src={SeabornLogo} alt="Seaborn" /> },
    { name: "TensorFlow", icon: <img src={TensorFlowLogo} alt="TensorFlow" /> },
    { name: "Keras", icon: <img src={KerasLogo} alt="Keras" /> },
    { name: "OpenCV", icon: <img src={OpenCVLogo} alt="OpenCV" /> },
  ];

  const toolsPlatforms = [
    { name: "Jupyter", icon: <img src={JupyterLogo} alt="Jupyter" /> },
    { name: "Google Colab", icon: <img src={GoogleColabLogo} alt="Google Colab" /> },
    { name: "Git", icon: <img src={GitLogo} alt="Git" /> },
    { name: "Google Cloud", icon: <img src={GoogleCloudLogo} alt="Google Cloud" /> },
    { name: "Flask", icon: <img src={FlaskLogo} alt="Flask" /> },
    { name: "VS Code", icon: <img src={VSCodeLogo} alt="VS Code" /> },
    { name: "Tableau", icon: <img src={TableauLogo} alt="Tableau" /> },
  ];

  const databases = [
    { name: "MySQL", icon: <img src={MySQLLogo} alt="MySQL" /> },
    { name: "SQLite", icon: <img src={SQLiteLogo} alt="SQLite" /> },
  ];

  const designMedia = [
    { name: "Photoshop", icon: <img src={PhotoshopLogo} alt="Photoshop" /> },
    { name: "Illustrator", icon: <img src={IllustratorLogo} alt="Illustrator" /> },
    { name: "Premiere Pro", icon: <img src={PremiereProLogo} alt="Premiere Pro" /> },
    { name: "After Effects", icon: <img src={AfterEffectsLogo} alt="After Effects" /> },
    { name: "Blender", icon: <img src={BlenderLogo} alt="Blender" /> },
    { name: "Canva", icon: <img src={CanvaLogo} alt="Canva" /> },
  ];

  const languages = [
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Fluent" },
    { name: "Marathi", proficiency: "Fluent" },
    { name: "Konkani", proficiency: "Native" },
  ];

  return (
    <div className={isDarkmode ? "skillscontainerDark" : "skillscontainer"}>
      <div className="skillsWrapper">
        <h1>Skills</h1>
        <div className="flexSkills">
          <div className="skillsCategory">
            <h2>Programming Languages</h2>
            <div className="skillsList">
              {programmingLanguages.map((skill, index) => (
                <div key={index} className="skillItem">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skillsCategory">
            <h2>Data Science & ML</h2>
            <div className="skillsList">
              {dataScienceML.map((skill, index) => (
                <div key={index} className="skillItem">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skillsCategory">
            <h2>Tools & Platforms</h2>
            <div className="skillsList">
              {toolsPlatforms.map((skill, index) => (
                <div key={index} className="skillItem">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skillsCategory">
            <h2>Databases</h2>
            <div className="skillsList">
              {databases.map((skill, index) => (
                <div key={index} className="skillItem">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skillsCategory">
            <h2>Design & Media</h2>
            <div className="skillsList">
              {designMedia.map((skill, index) => (
                <div key={index} className="skillItem">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skillsCategory">
            <h2>Languages</h2>
            <div className="skillsList">
              {languages.map((language, index) => (
                <div key={index} className="skillItem">
                  <span>{language.name} ({language.proficiency})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
