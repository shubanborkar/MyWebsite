import { useTheme } from "../../context/ThemeContext";

import "./pageHero.scss";

interface PageHeroProps {
  topIcon?: JSX.Element;
  topText?: string;
  pageHeading: string;
  extraText?: string;
}

const PageHero = ({ pageHeading, extraText }: PageHeroProps) => {
  const { isDarkmode } = useTheme();
  return (
    <div className={isDarkmode ? "pageHeroDark" : "pageHero"}>
      <div className="pageHeroContainer">
        <h1>
          {pageHeading.split(" ").map((word, index) => (
            <span key={index} style={{ display: "inline-block" }}>
              {word}{" "}
            </span>
          ))}
        </h1>
        {extraText && (
          <p className={isDarkmode ? "extraTextDark" : "extraText"}>
            {extraText}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
