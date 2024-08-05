import Image from "next/image";
import process from "../../public/images/Our Work Process.svg";
const OnBoardingProcess = () => {
  return (
    <div className="flex flex-col pb-12 pt-12 px-3 items-center space-y-8">
      <div className="flex flex-col space-y-4 text-[#323232] text-center">
        <h1 className="text-3xl font-bold">Onboarding Process</h1>
        <p className="text-base font-medium  text-wrap">
          Navigating your way around Homly is <br /> quite easy.
        </p>
      </div>
      <div>
        <Image src={process} alt="our work process" width={475} height={315} />
      </div>
    </div>
  );
};

export default OnBoardingProcess;
