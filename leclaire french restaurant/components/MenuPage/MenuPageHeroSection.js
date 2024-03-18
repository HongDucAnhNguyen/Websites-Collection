import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import styles from "../../app/styles/hero.module.css";
import SectionHeading from "../GlobalComponents/SectionHeading";

const MenuPageHeroSection = () => {
  return (
    <Box className={styles.menuPageHeroSection}>
      <Layout>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <SectionHeading
            content="Our Menu"
            align="center"
            size={64}
          ></SectionHeading>
          <Text
            textAlign="center"
            maxW={500}
            color="white"
            fontSize={18}
            fontFamily="Open Sans"
          >
            Explore LeClaire's menu, where every dish is crafted to delight.
            From special menus tailored for intimate gatherings to large groups,
            and even dream weddings, our culinary team ensures each bite is
            memorable
          </Text>
        </Flex>
      </Layout>
    </Box>
  );
};

export default MenuPageHeroSection;
