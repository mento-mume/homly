import { Fredoka } from "next/font/google";
import splash from "../../public/images/Group 39.svg";
import rectangle from "../../public/images/Rectangle 43.svg";
import Image from "next/image";
import Button from "../components/Button";

const fredoka = Fredoka({ subsets: ["latin"] });
function Home() {
  return (
    <div className=" flex flex-col md:flex-row">
      <div className="mx-5 my-8 flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h1
            className={`${fredoka.className} text-5xl font-extrabold leading-[58px]`}
          >
            Your <span className="text-secondary">No 1</span>
            <br />
            Estate and Home
            <br />
            <span className="text-secondary">Management App</span>
          </h1>
          <p className="font-lexend text-xl font-normal">
            Smarter and simplified everyday living, manage your properties from
            any location, unlimited automation and access control at your
            fingertips.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <Button
            variant="primary"
            size="big"
            // onClick={() => alert("Tertiary Big Clicked")}
          >
            e-portal login
          </Button>

          <Button
            variant="secondary"
            size="big"
            // onClick={() => alert("Tertiary Big Clicked")}
          >
            Download app
          </Button>
        </div>
      </div>
      {/* <div className="flex flex-row relative ">
        <Image
          className="z-20 mt-10"
          src={signUp}
          alt={"sign up"}
          width={191}
          height={389}
        />
        <Image
          className="z-10 mt-10"
          src={signIn}
          alt={"sign in"}
          width={179}
          height={387}
        />
        <Image
          className="absolute z-1"
          src={rectangle}
          alt={"rectangle"}
          width={457}
          height={617}
        />
      </div> */}
      <div className="relative flex flex-row pt-30">
        <Image
          className="absolute z-0"
          src={rectangle}
          alt="background rectangle"
          width={457}
          height={617}
        />

        <Image
          className="z-10 ml-5 mt-20"
          src={splash}
          alt="sign up"
          width={634}
          height={554}
        />
      </div>
    </div>
  );
}

export default Home;
