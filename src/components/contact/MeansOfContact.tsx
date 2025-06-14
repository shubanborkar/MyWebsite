import { useTheme } from "../../context/ThemeContext";
import ContactCard from "./ContactCard";
import {
  GmailIcon,
  GmailDarkIcon,
  InstagramIcon,
  LinkedInContactIcon,
  PhoneIcon,
} from "../../assets/icons/icons";
import "./meansOfContact.scss";

const MeansOfContact = () => {
  const { isDarkmode } = useTheme();
  return (
    <div className={isDarkmode ? "meansOfContactDark" : "meansOfContact"}>
      <div className="meansOfContactContainer">
        <ContactCard
          icon={isDarkmode ? <GmailDarkIcon /> : <GmailIcon />}
          title="Email"
          value="shubanborkar@gmail.com"
          link="mailto:shubanborkar@gmail.com"
        />
        <ContactCard
          icon={<InstagramIcon />}
          title="Instagram"
          value="@shubanborkar04"
          link="https://instagram.com/shubanborkar04"
        />
        <ContactCard
          icon={<LinkedInContactIcon />}
          title="LinkedIn"
          value="Shuban Borkar"
          link="https://www.linkedin.com/in/shuban-borkar/"
        />
        <ContactCard
          icon={<PhoneIcon />}
          title="Phone"
          value="+91 90290 23307"
          link="tel:+919029023307"
        />
      </div>
    </div>
  );
};

export default MeansOfContact;
