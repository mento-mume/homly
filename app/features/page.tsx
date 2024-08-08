import Image from "next/image";
import Button from "../components/Button";
import one from "../../public/images/01.svg";
import frame from "../../public/images/Frame 59632.svg";
import FeatureList from "../components/FeatureList";
function Features() {
  return (
    <section className="mt-[120px] bg-primary pt-24 text-white">
      <div>
        <FeatureList />
      </div>
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
    </section>
  );
}

export default Features;
