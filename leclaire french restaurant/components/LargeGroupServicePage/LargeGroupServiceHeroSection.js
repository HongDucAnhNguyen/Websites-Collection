import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Layout from "../GlobalComponents/Layout";
import SectionHeading from "../GlobalComponents/SectionHeading";
import styles from "../../app/styles/hero.module.css";
const LargeGroupServiceHeroSection = () => {
  return (
    <Box className={styles.largeGroupServiceHeroSection}>
      <Layout>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <SectionHeading
          content="Large Groups"
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
          Gather your friends, family, or colleagues for a memorable dining
          experience at LeClaire. Our spacious restaurant can accommodate large
          groups, ensuring everyone can enjoy our exquisite cuisine and
          impeccable service together.
        </Text>
        </Flex>
      </Layout>
    </Box>
  );
};

export default LargeGroupServiceHeroSection;
