import React from "react";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Classes from "../components/Classes";
import ReelsCarousel from "../components/ReelsCarousel";
import Transformation from "../components/Transformation";
import Trainers from "../components/Trainers";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Location from "../components/Location";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <Classes />
      <ReelsCarousel />
      <Transformation />
      <Trainers />
      <Reviews />
      <FAQ />
      <Location />
    </>
  );
};

export default Home;
