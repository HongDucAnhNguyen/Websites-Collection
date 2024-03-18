
import Contact from "../../components/GlobalComponents/Contact";
import DeliveryAndPickup from "../../components/Homepage/DeliveryAndPickup";
import MenuPageHeroSection from "../../components/MenuPage/MenuPageHeroSection";
import MenuPageMenuSection from "../../components/MenuPage/MenuPageMenuSection";

const page = () => {
  return (
    <>
      <MenuPageHeroSection></MenuPageHeroSection>
      <MenuPageMenuSection></MenuPageMenuSection>
      <DeliveryAndPickup></DeliveryAndPickup>
      <Contact></Contact>
    </>
  );
};

export default page;
