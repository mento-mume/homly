import Image from "next/image";
import Button from "./Button";

interface FeatureCardProps {
  icon: string;
  title: string;
  text: string;
}

const FeatureCard = ({ icon, title, text }: FeatureCardProps) => {
  return (
    <div className="mx-5 px-6 pt-8 border border-2 rounded-lg pb-[98px] bg-[#FBFBFB] shadow-[#00000012]space-y-6 drop-shadow-lg">
      <div className="flex flex-col items-center justify-center space-y-8">
        <Image src={icon} width={72} height={72} alt="feature icon" />
        <div className="font-lexend gap-y-4 flex flex-col">
          <h2 className="text-[32px] font-semibold text-primary items-center">
            {title}
          </h2>
          <p className="text-xl">{text}</p>
        </div>
        <Button
          variant="secondary"
          size="big"
          // onClick={() => alert("Tertiary Big Clicked")}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default FeatureCard;
