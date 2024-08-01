import Image from "next/image";
import Button from "./Button";

interface FeatureCardProps {
  icon: string;
  title: string;
  text: string;
}

const FeatureCard = ({ icon, title, text }: FeatureCardProps) => {
  return (
    <div className="mx-5 mb-6 px-6 space-y-8 drop-shadow-md">
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
