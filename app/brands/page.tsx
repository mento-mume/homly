import Image from "next/image";
import bakers from "../../public/images/Bakers Court.svg";
import shekina from "../../public/images/Shekina Estate.svg";
import evergreen from "../../public/images/Evergreen Estate.svg";
import laffayette from "../../public/images/Laffayette Luxury Estate.svg";
import Qoral from "../../public/images/Qoral Groove Estate.svg";
import james from "../../public/images/image 7.svg";
import green from "../../public/images/image 5.svg";

function Brands() {
  const images = [
    { src: james, alt: "James Omeeiza & Co" },
    { src: laffayette, alt: "Laffayette" },
    { src: green, alt: "Green Box" },
  ];
  const images2 = [
    { src: Qoral, alt: "Qoral Groove" },
    { src: bakers, alt: "Bakers Court" },
    { src: evergreen, alt: "Evergreen" },
    { src: shekina, alt: "shekina estate" },
  ];
  return (
    <div className="py-14 px-5 bg-[#FBFBFB] border-2 border-[#D1D1D1]">
      <div className="flex flex-col items-center">
        <p className="font-lexend text-4xl font-bold">Our Clients</p>
        {images.map((image, index) => (
          <div key={index} className="my-8">
            <Image
              src={image.src}
              alt={image.alt}
              width={350}
              height={83} // Maintain aspect ratio
            />
          </div>
        ))}

        {images2.map((image, index) => (
          <div key={index} className="my-8">
            <Image
              src={image.src}
              alt={image.alt}
              width={350}
              height={83} // Maintain aspect ratio
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
