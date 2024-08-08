import Image from "next/image";
import Logo from "../../public/images/Logo.svg";
import ContactCard from "../components/ContactCard";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import apple from "../../public/images/Rectangle 71.png";
import playstore from "../../public/images/Rectangle 72.png";
import { useState } from "react";
function AboutUs() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    // Add your subscription logic here (e.g., send the email to an API endpoint)
  };
  return (
    <section className="bg-primary text-white pt-12 px-5 pb-[105px] ">
      <div className="grid grid-cols-1 space-y-16 mb-16">
        <div className="flex flex-col space-y-4 ">
          <Image src={Logo} alt="Homly logo" width={216} height={73} />
          <p>Easy living, the smarter way...</p>
          <div className="flex flex-row space-x-4">
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
          </div>
        </div>
        <div className="text-xl">
          <h3 className="text-2xl font-bold">Company</h3>
          <p>Features</p>
          <p>How it works</p>
          <p>FAQ</p>
          <p>Contact us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className="flex flex-col space-y-6">
          <h3 className="text-2xl font-bold">contact us</h3>
          <ContactCard textColor="text-white" />
        </div>
        <div className="flex flex-col space-y-6">
          <h3 className="text-2xl font-bold">Newsletter</h3>
          <p className="text-xl">
            Subscribe to out news letter to get the latest updates.
          </p>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex w-[336px] h-14 items-center bg-white rounded-full overflow-hidden "
            >
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-none px-4 bg-red py-2 text-gray-700 bg-white outline-none rounded-full"
                required
              />
              <button
                type="submit"
                className="py-3 px-5 bg-primary text-white font-semibold rounded-full hover:bg-primary hover:text-white w-36 h-12  "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6 items-center ">
        <h3 className="text-2xl font-bold">Availaible on:</h3>
        <Image src={apple} alt="Homly logo" width={185} height={54} />
        <Image src={playstore} alt="Homly logo" width={167} height={54} />
      </div>
    </section>
  );
}

export default AboutUs;
