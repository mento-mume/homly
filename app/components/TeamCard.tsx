import { StaticImageData } from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";

interface TeamCardProps {
  image: StaticImageData;
  name: string;
  title: string;
  linkedIn: string;
}
const TeamCard = ({ image, name, title, linkedIn }: TeamCardProps) => {
  return (
    <div
      className="flex flex-col mx-12 shadow-lg shadow-[
#000000] rounded-md mb-6  "
    >
      <div>
        <Image src={image} alt={name} width={300} height={285} />
      </div>
      <div className="p-6">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-sm text-[#7E7E7E]">{title}</p>
        <Link className="text-sm text-[#7E7E7E]" href="#">
          {linkedIn}
        </Link>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  linkedIn: PropTypes.string,
};

export default TeamCard;
