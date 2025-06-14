import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../../assets/icons/icons";
import "./socials.scss";

interface SocialsProps {}

const Socials: React.FunctionComponent<SocialsProps> = () => {
  return (
    <div className="socialswrapper">
      <a
        className="socialIcons"
        href="https://github.com/shubanborkar"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Shuban's github account"
      >
        <GithubIcon />
      </a>
      <a
        className="socialIcons"
        href="https://instagram.com/shubanborkar04"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Shuban's instagram account"
      >
        <InstagramIcon />
      </a>
      <a
        className="socialIcons"
        href="https://leetcode.com/u/shubanborkar04/"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Shuban's LeetCode account"
      >
        <img 
          src="/lc.png" 
          alt="LeetCode" 
          style={{ width: '35px', height: '34px' }}
        />
      </a>
      <a
        className="socialIcons"
        href="https://www.linkedin.com/in/shuban-borkar/"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Shuban's linkedin account"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default Socials;
