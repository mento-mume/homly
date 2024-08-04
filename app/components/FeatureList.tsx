// components/FeatureList.js

import { useState } from "react";
import card from "../../public/images/fluent_wallet-credit-card-32-regular.svg";
import home from "../../public/images/solar_home-outline.svg";
import emergency from "../../public/images/healthicons_accident-and-emergency-outline.svg";
import handyman from "../../public/images/fluent-mdl2_c-r-m-services.svg";
import one from "../../public/images/01.svg";
import frame from "../../public/images/Frame 59632.svg";
import Image from "next/image";
import Button from "./Button";
const FeatureList = () => {
  const [active, setActive] = useState(0);

  const features = [
    { icon: home, title: "Estate/Home Management" },
    { icon: card, title: "Mobile wallet/Bills payment" },
    { icon: handyman, title: "Handyman Services" },
    { icon: emergency, title: "Handyman Services" },
  ];

  return (
    <div className="bg-primary pt-24 text-white  mt-[120px] ">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col mx-5 space-y-4 mb-8">
          <Image
            src={feature.icon}
            alt={feature.title}
            width={50}
            height={47}
          />
          <div className="flex-1">
            <h2 className="font-bold">{feature.title}</h2>
          </div>
          <hr
            className={`border-t-4 w-14 ${
              index === active ? "border-[#FEFEFE]" : "border-[#A7A7A7]"
            }`}
          />
        </div>
      ))}
      <div className="mt-40 mx-5 pb-28 space-y-16">
        <div className="flex flex-col space-y-6">
          <Image src={one} alt="one" width={54} height={56} />
          <h1 className="font-bold text-[32px] ">Estate/Home Management</h1>
          <p className="text-xl">
            You are no longer required to be physically present in order to
            manage your Estate. You can add/remove occupants, track financial
            records, track visitors, manage estate workers, and much more.
          </p>
          <Button
            variant="tertiary"
            size="big"
            // onClick={() => alert("Tertiary Big Clicked")}
          >
            Learn More
          </Button>
        </div>
        <div>
          <Image src={frame} alt="one" width={345} height={296} />
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
