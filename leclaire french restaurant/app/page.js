import AboutUsSection from "@/components/Homepage/AboutUsSection";
import HeroSection from "@/components/Homepage/HeroSection";
import NavBar from "@/components/GlobalComponents/NavBar";
import ReservationsSection from "@/components/Homepage/ReservationsSection";
import DeliveryAndPickup from "@/components/Homepage/DeliveryAndPickup";
import TestimonialsSection from "@/components/Homepage/TestimonialsSection";
import AwardsSection from "@/components/Homepage/AwardsSection";
import Contact from "./contact/page";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <AboutUsSection></AboutUsSection>
      <ReservationsSection></ReservationsSection>
      <DeliveryAndPickup></DeliveryAndPickup>
      <TestimonialsSection></TestimonialsSection>
      <AwardsSection></AwardsSection>
      <Contact></Contact>
    </>
  );
};

export default Home;
