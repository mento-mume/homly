import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div>
      <div className="flex items-center mb-2">
        <FaMapMarkerAlt className="text-primary mr-2" />
        <p className="text-gray-700">
          D1, Qualitrend Residence, No.1 Ruben Okoya Cresent, Wuye, AbujaNG
        </p>
      </div>
      <div className="flex items-center mb-2">
        <FaPhoneAlt className="text-primary mr-2" />
        <p className="text-gray-700">(+234) (0) 901 913 2098</p>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="text-primary mr-2" />
        <p className="text-gray-700">projects@homlyng.com</p>
      </div>
    </div>
  );
};

export default ContactCard;
