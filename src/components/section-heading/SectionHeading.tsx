import "./sectionHeading.scss";
import { useTheme } from "../../context/ThemeContext";

interface SectionHeadingProps {
  sectionName: string;
}

const SectionHeading: React.FunctionComponent<SectionHeadingProps> = ({
  sectionName,
}) => {
  const theme = useTheme();
  return (
    <div className={theme.isDarkmode ? "headingWrapperDark" : "headingWrapper"}>
      <p className="headName">{sectionName}</p>
      <div className="headLine"></div>
    </div>
  );
};

export default SectionHeading;
