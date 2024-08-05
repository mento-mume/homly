"use client";
import Image from "next/image";
import Button from "./components/Button";
import Hero from "./hero/page";
import Brands from "./brands/page";
import CityScape from "./cityScape/page";
import Details from "./details/pages";
import FeatureList from "./components/FeatureList";
import OnboardingProcess from "./components/OnBoardingProcess";
export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <CityScape />
      <Details />
      <FeatureList />
      <OnboardingProcess />
    </main>
  );
}
