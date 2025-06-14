import { useTheme } from "../../context/ThemeContext";
import "./education.scss";

const Education = () => {
  const { isDarkmode } = useTheme();

  const educationDetails = [
    {
      institution: "Thadomal Shahani Engineering College (TSEC)",
      degree: "Bachelor of Engineering in Artificial Intelligence and Data Science",
      duration: "Nov. 2022 – May 2026",
      cgpa: "CGPA – 8.79"
    },
    {
      institution: "PACE Junior Science College",
      degree: "Higher Secondary Certificate (HSC)",
      duration: "March 2022"
    },
    {
      institution: "Thakur Vidya Mandir School",
      degree: "Secondary School Certificate (SSC)",
      duration: "March 2020"
    }
  ];

  return (
    <div className={isDarkmode ? "educationContainerDark" : "educationContainer"}>
      <div className="educationWrapper">
        <h1>Education</h1>
        <div className="educationList">
          {educationDetails.map((edu, index) => (
            <div key={index} className={isDarkmode ? "educationItemDark" : "educationItem"}>
              <h3 className={isDarkmode ? "institutionDark" : "institution"}>
                {edu.institution}
              </h3>
              <p className={isDarkmode ? "degreeDark" : "degree"}>
                {edu.degree}
              </p>
              <p className={isDarkmode ? "durationDark" : "duration"}>
                {edu.duration}
              </p>
              {edu.cgpa && (
                <p className={isDarkmode ? "cgpaDark" : "cgpa"}>
                  {edu.cgpa}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education; 