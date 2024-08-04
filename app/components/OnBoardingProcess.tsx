// components/OnboardingProcess.tsx

import Image from "next/image";

const OnboardingProcess: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 py-12 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Onboarding Process</h1>
      <p className="text-lg text-gray-600 mb-12">
        Navigating your way around Homly is quite easy.
      </p>

      <div className="relative flex flex-col items-center max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-around w-full">
          <div className="flex flex-col items-center text-center space-y-2 max-w-xs">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-200 rounded-full">
              <span className="text-lg">1</span>
            </div>
            <p className="text-sm text-gray-700">
              Copy the pin number Homly sends to the box.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 max-w-xs">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-200 rounded-full">
              <span className="text-lg">2</span>
            </div>
            <p className="text-sm text-gray-700">
              Download the app and log in as instructed with the pin.
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <Image
            src="/images/phone.png" // Make sure to replace with the actual path to your image
            alt="Phone"
            width={300}
            height={600}
            className="z-10"
          />
          <div className="absolute flex flex-col items-center text-center space-y-2 max-w-xs top-[40%] left-0">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
              <span className="text-lg">3</span>
            </div>
            <p className="text-sm text-gray-700">
              Type in pin and select continue.
            </p>
          </div>
          <div className="absolute flex flex-col items-center text-center space-y-2 max-w-xs top-[40%] right-0">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full">
              <span className="text-lg">4</span>
            </div>
            <p className="text-sm text-gray-700">
              You can access a feed from your already friends devices.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-around w-full">
          <div className="flex flex-col items-center text-center space-y-2 max-w-xs">
            <div className="flex items-center justify-center w-12 h-12 bg-green-200 rounded-full">
              <span className="text-lg">5</span>
            </div>
            <p className="text-sm text-gray-700">
              Fill in your details and you are done with the registration,
              welcome!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingProcess;
