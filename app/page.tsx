"use client";
import Hero from "./hero/page";
import Brands from "./brands/page";
import CityScape from "./cityScape/page";
import Details from "./details/pages";
import OnboardingProcess from "./components/OnBoardingProcess";
import Carousel from "./components/Carousel";
import Testimonials from "./testimonials/page";
import Team from "./team/page";
import ContactUs from "./contactus/page";
import AboutUs from "./AboutUs/page";
import Features from "./features/page";
export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <CityScape />
      <Details />

      <Features />
      <OnboardingProcess />
      <Carousel />
      <Testimonials />
      <Team />
      <ContactUs />
      <AboutUs />
    </main>
  );
}
