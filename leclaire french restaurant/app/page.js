import HeroSection from "../components/Homepage/HeroSection";
import AboutUsSection from "../components/Homepage/AboutUsSection";
import ReservationsSection from "../components/Homepage/ReservationsSection";
import DeliveryAndPickup from "../components/Homepage/DeliveryAndPickup";
import TestimonialsSection from "../components/Homepage/TestimonialsSection";
import AwardsSection from "../components/Homepage/AwardsSection";
import Contact from "../components/GlobalComponents/Contact";
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
