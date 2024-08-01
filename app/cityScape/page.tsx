import Image from "next/image";
import rectangle from "../../public/images/Rectangle 46.svg";
import cityscape from "../../public/images/Cityscapes Downtown.svg";
function CityScape() {
  return (
    <div className="flex flex-col gap-16 ">
      <div className=" flex flex-row relative">
        <Image
          className="z-1 absolute"
          alt="background"
          src={rectangle}
          width={250}
          height={250}
        />

        <Image
          className="z-10 mt-40 mx-8"
          alt="cityscape"
          src={cityscape}
          width={380}
          height={400}
        />
      </div>
      <div className="mx-5 flex flex-col gap-12 ">
        <p className="text-xl">
          There&apos;s a certain way of creating a service, hospitality, and
          experience that perpetuates people feeling like they matter. This is
          what motivates us in HOMLY, we pride ourselves in knowing our clients
          and partners matter. <br />
          <br />
          <p>We are trusted and reliable.</p>
        </p>

        <div>
          <div className="flex justify-between items-center text-center">
            <div>
              <div className="text-primary text-lg">over</div>
              <div className="text-primary text-5xl font-bold">5k</div>
              <div className="text-primary">Households</div>
            </div>
            <div>
              <div className="text-primary text-lg">over</div>
              <div className="text-primary text-5xl font-bold">1k</div>
              <div className="text-primary">Partners</div>
            </div>
            <div>
              <div className="text-primary text-lg">Facility</div>
              <div className="text-primary text-5xl font-bold">20+</div>
              <div className="text-primary">companies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityScape;
