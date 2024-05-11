import React from "react";
import Layout from "../GlobalComponents/Layout";
import SectionHeading from "../GlobalComponents/SectionHeading";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import ourStoryImg from "../../public/assets/images/our_story.jpg";
import styles from "../../app/styles/aboutus.module.css";

const OurStorySection = () => {
  return (
    <Box bg="#303030">
      <Layout>
        <Flex
          gap={20}
        
          className={styles.aboutUsStoryAndMissionSections}
        >
          <Box maxWidth={400}>
            <SectionHeading content="Our Story"></SectionHeading>
            <Text mt={5} color="white" fontFamily="Open Sans" fontSize={18}>
              LeClaire's tale begins as a cozy family bistro in Calgary, a
              humble space where authentic French flavors met warm hospitality.
            </Text>
            <Text mt={5} color="white" fontFamily="Open Sans" fontSize={18}>
              Over time, our small establishment grew into a beloved cornerstone
              of French cuisine, captivating diners with our commitment to
              excellence and cherished traditions.
            </Text>
            <Text mt={5} color="white" fontFamily="Open Sans" fontSize={18}>
              Today, LeClaire stands as a testament to our founders' vision—a
              place where every dish tells a story, and every guest becomes part
              of our culinary journey.
            </Text>
          </Box>
          <Box position="relative" className={styles.aboutUsPageImages}>
            <Image fill={true} src={ourStoryImg} alt="our story img"></Image>
          </Box>
        </Flex>
      </Layout>
    </Box>
  );
};

export default OurStorySection;
