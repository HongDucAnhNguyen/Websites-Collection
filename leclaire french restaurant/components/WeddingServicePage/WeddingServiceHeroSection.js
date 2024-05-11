import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import SectionHeading from "../GlobalComponents/SectionHeading";
import styles from "../../app/styles/hero.module.css";
const WeddingServiceHeroSection = () => {
  return (
    <Box className={styles.weddingServiceHeroSection}>
      <Layout>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <SectionHeading
            content="Weddings"
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
            pl={5}
            pr={5}
          >
            Create unforgettable moments on your special day at LeClaire. With
            our elegant ambiance, exquisite cuisine, and dedicated event
            coordinator, we'll ensure your wedding day is everything you've
            dreamed of and more.
          </Text>
        </Flex>
      </Layout>
    </Box>
  );
};

export default WeddingServiceHeroSection;
