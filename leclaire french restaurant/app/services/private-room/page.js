import React from "react";
import PrivateRoomServiceHeroSection from "../../../components/PrivateRoomServicePage/PrivateRoomServiceHeroSection";

import PrivateRoomServiceInfoSection from "../../../components/PrivateRoomServicePage/PrivateRoomServiceInfoSection";
import ReservationProcessSection from "../../../components/GlobalComponents/ReservationProcessSection";
import PoliciesSection from "../../../components/GlobalComponents/PoliciesSection";
import ServiceFormSection from "../../../components/GlobalComponents/ServiceFormSection";
const page = () => {
  return (
    <>
      <PrivateRoomServiceHeroSection></PrivateRoomServiceHeroSection>
      <PrivateRoomServiceInfoSection></PrivateRoomServiceInfoSection>
      <PoliciesSection cancellationTimeLimit={48}></PoliciesSection>
      <ReservationProcessSection></ReservationProcessSection>
      <ServiceFormSection maxGuests={4}></ServiceFormSection>
    </>
  );
};

export default page;
