import { Box } from "@chakra-ui/react";
import AboutUsHeroSection from "../../components/AboutUsPage/AboutUsHeroSection";
import OurStorySection from "../../components/AboutUsPage/OurStorySection";
import OurMissionSection from "../../components/AboutUsPage/OurMissionSection";
import AboutUsContactSection from "../../components/AboutUsPage/AboutUsContactSection";
import React from "react";
const page = () => {
  return (
    <>
      <AboutUsHeroSection></AboutUsHeroSection>
      <OurStorySection></OurStorySection>
      <OurMissionSection></OurMissionSection>
      <AboutUsContactSection></AboutUsContactSection>
    </>
  );
};

export default page;
