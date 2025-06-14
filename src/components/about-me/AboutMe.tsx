import { useTheme } from "../../context/ThemeContext";
import "./about.scss";
import AnimatedText from "../animatedText/AnimatedText";

const AboutMe = () => {
  const { isDarkmode } = useTheme();
  return (
    <div className={isDarkmode ? "aboutMeDark" : "aboutMe"}>
      <div className="aboutMeContainer">
        <div className="aboutMeImage">
          <img src="/ffff.png" alt="Shuban Borkar" />
        </div>
        <div className="aboutMeContent">
          <AnimatedText
            text="Meet Shuban Borkar."
            className={isDarkmode ? "aboutMeTitleDark" : "aboutMeTitle"}
          />
          <p className={isDarkmode ? "aboutMeTextDark" : "aboutMeText"}>
            I am a passionate data analyst with a strong foundation in data visualization, statistical analysis, and business intelligence. My expertise lies in transforming complex data into actionable insights that drive business decisions.
          </p>
          <p className={isDarkmode ? "aboutMeTextDark" : "aboutMeText"}>
            With proficiency in tools like Python, SQL, and Tableau, I excel at uncovering patterns and trends in data that help organizations make informed decisions. I'm particularly interested in predictive analytics and data-driven storytelling.
          </p>
          <p className={isDarkmode ? "aboutMeTextDark" : "aboutMeText"}>
            When I'm not analyzing data, you can find me exploring new datasets, learning about emerging data science techniques, or sharing my knowledge through technical writing and community engagement.
          </p>
        </div>
      </div>

      <div className="experienceSection">
        <AnimatedText
          text="Research & Leadership Experience"
          className={isDarkmode ? "experienceTitleDark" : "experienceTitle"}
        />
        
        <div className="experienceContent">
          <div className="experienceItem">
            <h3 className={isDarkmode ? "experienceItemTitleDark" : "experienceItemTitle"}>
              A Comparative Analysis of Machine Learning Models for Traffic Flow Prediction
            </h3>
            <p className={isDarkmode ? "experienceItemSubtitleDark" : "experienceItemSubtitle"}>
              Accepted for publication at the 6th World Conference on Artificial Intelligence: Advances and Applications (WCAIAA 2025), Springer
            </p>
            <ul className={isDarkmode ? "experienceItemListDark" : "experienceItemList"}>
              <li>First Author — Conducted a comparative study of five supervised learning algorithms for traffic flow prediction using a dataset of 10,000+ samples</li>
              <li>Improved model accuracy by 21% through feature engineering and hyperparameter tuning</li>
              <li>Evaluated performance using RMSE and R2 metrics</li>
            </ul>
          </div>

          <div className="experienceItem">
            <h3 className={isDarkmode ? "experienceItemTitleDark" : "experienceItemTitle"}>
              Joint Media Organising Secretary - TSEC Students' Council
            </h3>
            <p className={isDarkmode ? "experienceItemSubtitleDark" : "experienceItemSubtitle"}>
              July 2024 – May 2025
            </p>
            <ul className={isDarkmode ? "experienceItemListDark" : "experienceItemList"}>
              <li>Led media for 10+ events, boosting Instagram engagement by 180%</li>
              <li>Managed content for 3,000+ students, coordinated with design/logistics</li>
              <li>Directed a 4-member media team</li>
            </ul>
          </div>

          <div className="experienceItem">
            <h3 className={isDarkmode ? "experienceItemTitleDark" : "experienceItemTitle"}>
              Design Head – TSEC Students' Council
            </h3>
            <p className={isDarkmode ? "experienceItemSubtitleDark" : "experienceItemSubtitle"}>
              July 2023 – May 2024
            </p>
            <ul className={isDarkmode ? "experienceItemListDark" : "experienceItemList"}>
              <li>Led end-to-end design for 10+ college events, driving visual consistency across digital and print media</li>
              <li>Designed creatives for 2,000+ students across academic, cultural, and sports initiatives</li>
              <li>Collaborated with media, logistics, and sponsorship teams to deliver timely assets</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
