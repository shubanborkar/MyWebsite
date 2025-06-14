import { useTheme } from "../../context/ThemeContext";
import {
  GoldRects,
  GreenRects,
  PinkRects,
  PurpleRects,
} from "../../assets/icons/icons";
import "./contact.scss";
import { useNavigate } from "react-router-dom";
import AnimatedText from "../animatedText/AnimatedText";
import Socials from "../socials/Socials";

interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = () => {
  const navigate = useNavigate();
  const { isDarkmode } = useTheme();

  return (
    <div className={isDarkmode ? "contactwrapperDark" : "contactwrapper"}>
      <AnimatedText text={`Want us to work`} className="mg-0" />
      <AnimatedText text={`together ?`} />
      <button
        onClick={() => {
          navigate("/contact");
          scrollTo(0, 0);
        }}
        className="contact"
        aria-label="contact me"
      >
        Contact Me
      </button>
      <Socials />
      <div className="purple">
        <PurpleRects />
      </div>
      <div className="green">
        <GreenRects />
      </div>
      <div className="gold">
        <GoldRects />
      </div>
      <div className="pink">
        <PinkRects />
      </div>
    </div>
  );
};

export default Contact;