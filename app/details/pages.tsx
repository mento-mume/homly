import FeatureCard from "../components/FeatureCard";
import traffic from "../../public/images/Vector.svg";
import door from "../../public/images/material-symbols_nest-doorbell-visitor-outline-rounded.svg";
import spanner from "../../public/images/wpf_maintenance.svg";

const features = [
  {
    icon: traffic,
    title: "Bill Payment",
    text: " Fund your wallet and pay estate and utility bills with ease",
  },
  {
    icon: door,
    title: "Visitor’s Management",
    text: " Enjoy smooth scheduling of guests at your home before they arrive.",
  },
  {
    icon: spanner,
    title: "Maintenance Service",
    text: " Get easy access to a handyman or artisan when in need",
  },
];

const Details = () => {
  return (
    <div className="flex flex-col justify-between items-center text-center mt-[104px] space-y-16">
      <div className="mx-6 font-lexend flex flex-col space-y-8">
        <h2 className="font-bold text-3xl">Features</h2>
        <p className="font-semibold text-xl">
          An array of highly innovative features built for comfort and
          satisfaction.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Details;
