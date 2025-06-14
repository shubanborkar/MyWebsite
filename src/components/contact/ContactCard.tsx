import { useTheme } from "../../context/ThemeContext";
import "./contactCard.scss";

interface ContactCardProps {
  icon: JSX.Element;
  title: string;
  value: string;
  link?: string;
}

const ContactCard: React.FunctionComponent<ContactCardProps> = ({
  icon,
  title,
  value,
  link,
}) => {
  const { isDarkmode } = useTheme();
  return (
    <div className={isDarkmode ? "contactCardDark" : "contactCard"}>
      <div className="icon">{icon}</div>
      <div className="details">
        <h3>{title}</h3>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ) : (
          <p>{value}</p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
