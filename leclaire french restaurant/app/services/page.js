import React from "react";
import ParentServicesHeroSection from "../../components/ParentServicesPage/ParentServicesHeroSection";
import ParentAllServicesSection from "../../components/ParentServicesPage/ParentAllServicesSection";
import ParentServicesContactSection from "../../components/ParentServicesPage/ParentServicesContactSection";
const page = () => {
  return (
    <>
      <ParentServicesHeroSection></ParentServicesHeroSection>
      <ParentAllServicesSection></ParentAllServicesSection>
      <ParentServicesContactSection></ParentServicesContactSection>
    </>
  );
};

export default page;
