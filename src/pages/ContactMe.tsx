import { useEffect } from "react";
import { PhoneIcon } from "../assets/icons/icons";
import Contact from "../components/contact/Contact";
import MeansOfContact from "../components/contact/MeansOfContact";
import Header from "../components/header/Header";
import PageHero from "../components/page-hero/PageHero";
import { motion, useIsPresent } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

interface ContactMeProps {}

const ContactMe: React.FunctionComponent<ContactMeProps> = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const isPresent = useIsPresent();
  const { isDarkmode } = useTheme();
  const isMobile = window.innerWidth <= 820;
  return (
    <div>
      <Header />
      <PageHero
        topIcon={<PhoneIcon />}
        topText="CONTACT ME"
        pageHeading="Say hello to me"
        extraText="Big ideas, small doubts, or just memes — I’m all ears."
      />
      <MeansOfContact />
      <Contact />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: isMobile ? 0 : 0.5, ease: "circOut" },
        }}
        exit={{
          scaleX: 1,
          transition: { duration: isMobile ? 0 : 0.5, ease: "circIn" },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className={
          isDarkmode ? "route-switch-screen-dark" : "route-switch-screen"
        }
      />
    </div>
  );
};

export default ContactMe;
