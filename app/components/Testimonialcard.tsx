import PropTypes from "prop-types";
import Image, { StaticImageData } from "next/image";

interface TestimonialCardProps {
  icon: StaticImageData;
  name: string;
  text: string;
  title: string;
}

const Testimonialcard = ({ icon, name, text, title }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col w-[268px] h-[248px] items-center mb-[50px] mt-6 rounded-lg shadow-md shadow-[#000000] p-6 mx-auto  bg-[#FBFBFB]">
      <div className="flex flex-row space-x-4">
        <div className="w-14 h-14  rounded-full">
          <Image src={icon} width={72} height={72} alt="profile Pic" />
        </div>
        <div>
          <h3 className="text-xl">{name}</h3> <p>{title}</p>
        </div>
      </div>
      <p className="text-base">{text}</p>
    </div>
  );
};

Testimonialcard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Testimonialcard;
