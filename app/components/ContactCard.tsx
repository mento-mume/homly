import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import PropTypes from "prop-types";

interface ContactCardProps {
  textColor: string;
}
const ContactCard = ({ textColor }: ContactCardProps) => {
  return (
    <div>
      <div className="flex items-center mb-2">
        <FaMapMarkerAlt className={`${textColor} mr-2`} />
        <p className={`${textColor}`}>
          D1, Qualitrend Residence, No.1 Ruben Okoya Cresent, Wuye, AbujaNG
        </p>
      </div>
      <div className="flex items-center mb-2">
        <FaMapMarkerAlt className={`${textColor} mr-2`} />
        <p className={`${textColor}`}>(+234) (0) 901 913 2098</p>
      </div>
      <div className="flex items-center">
        <FaMapMarkerAlt className={`${textColor} mr-2`} />
        <p className={`${textColor}`}>projects@homlyng.com</p>
      </div>
    </div>
  );
};

export default ContactCard;
