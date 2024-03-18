import React from "react";
import LargeGroupServiceHeroSection from "../../../components/LargeGroupServicePage/LargeGroupServiceHeroSection";
import LargeGroupServiceInfoSection from "../../../components/LargeGroupServicePage/LargeGroupServiceInfoSection";
import PoliciesSection from "../../../components/GlobalComponents/PoliciesSection";
import ReservationProcessSection from "../../../components/GlobalComponents/ReservationProcessSection";
import ServiceFormSection from "../../../components/GlobalComponents/ServiceFormSection";
const page = () => {
  return (
    <>
      <LargeGroupServiceHeroSection></LargeGroupServiceHeroSection>
      <LargeGroupServiceInfoSection></LargeGroupServiceInfoSection>
      <PoliciesSection cancellationTimeLimit={72}></PoliciesSection>
      <ReservationProcessSection></ReservationProcessSection>
      <ServiceFormSection maxGuests={8}></ServiceFormSection>
    </>
  );
};

export default page;
