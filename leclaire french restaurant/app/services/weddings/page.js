import React from "react";
import WeddingServiceHeroSection from "../../../components/WeddingServicePage/WeddingServiceHeroSection";
import PoliciesSection from "../../../components/GlobalComponents/PoliciesSection";
import ReservationProcessSection from "../../../components/GlobalComponents/ReservationProcessSection";
import ServiceFormSection from "../../../components/GlobalComponents/ServiceFormSection";
import WeddingServiceInfoSection from "../../../components/WeddingServicePage/WeddingServiceInfoSection";
const page = () => {
  return (
    <>
      <WeddingServiceHeroSection></WeddingServiceHeroSection>
      <WeddingServiceInfoSection></WeddingServiceInfoSection>
      <PoliciesSection cancellationTimeLimit={3000}></PoliciesSection>
      <ReservationProcessSection></ReservationProcessSection>
      <ServiceFormSection maxGuests={60}></ServiceFormSection>
    </>
  );
};

export default page;
