import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import SectionHeading from "../GlobalComponents/SectionHeading";
import styles from "../../app/styles/hero.module.css";
const ParentServicesHeroSection = () => {
  return (
    <Box className={styles.servicesHeroSection}>
      <Layout>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <SectionHeading
            align="center"
            content="Our Services"
            size={64}
          ></SectionHeading>
          <Text
            align="center"
            color="white"
            fontFamily="Open Sans"
            fontSize={18}
            maxWidth={500}
          >
           Discover Services tailored to your every need. From intimate gatherings in our private rooms to accommodating large groups, and even hosting your dream wedding, our dedicated team ensures every moment is memorable.
          </Text>
        </Flex>
      </Layout>
    </Box>
  );
};

export default ParentServicesHeroSection;
