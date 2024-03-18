import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import SectionHeading from "../GlobalComponents/SectionHeading";
import styles from "../../app/styles/hero.module.css";
const PrivateRoomServiceHeroSection = () => {
  return (
    <Box className={styles.privateRoomServiceHeroSection}>
      <Layout>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <SectionHeading
            content="Private Room"
            size={64}
            align="center"
          ></SectionHeading>
          <Text
            maxW={500}
            mt={5}
            fontSize={18}
            fontFamily="Open Sans"
            color="white"
            textAlign="center"
          >
            Elevate your dining experience with our exclusive private room at
            LeClaire. Perfect for intimate gatherings, business meetings, or
            special celebrations, our private space offers a secluded and
            elegant setting for your next event.
          </Text>
        </Flex>
      </Layout>
    </Box>
  );
};

export default PrivateRoomServiceHeroSection;
