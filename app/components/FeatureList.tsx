// components/FeatureList.js

import { useState } from "react";
import card from "../../public/images/fluent_wallet-credit-card-32-regular.svg";
import home from "../../public/images/solar_home-outline.svg";
import emergency from "../../public/images/healthicons_accident-and-emergency-outline.svg";
import handyman from "../../public/images/fluent-mdl2_c-r-m-services.svg";

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
    <div>
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col mx-5 space-y-4 mb-8"
          onClick={() => setActive(index)}
        >
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
    </div>
  );
};

export default FeatureList;
