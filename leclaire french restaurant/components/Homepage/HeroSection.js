"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "../../app/styles/hero.module.css";
import Layout from "../GlobalComponents/Layout";
import SectionHeading from "../GlobalComponents/SectionHeading";
import btnStyles from "../../app/styles/button.module.css";
import responsiveStyles from "../../app/styles/responsive/homepage.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <Box>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.homeHeroSection}
      >
        <Layout>
          <Box className={responsiveStyles.heroSectionContainer}>
            <Box>
              <motion.div variants={itemVariants}>
                <Box
                  className={responsiveStyles.heroSectionHeadingTextContainer}
                >
                  <SectionHeading
                    size={64}
                    content="Authentic, affordable French Cuisine"
                  ></SectionHeading>
                </Box>
              </motion.div>
              <motion.div variants={itemVariants}>
                {" "}
                <Box
                  className={
                    responsiveStyles.heroSectionDescriptionTextContainer
                  }
                >
                  {" "}
                  <Text
                    mt={30}
                    fontSize={18}
                    color="white"
                    fontFamily={"Open Sans"}
                  >
                    Serving our customers a taste of France in every bite.
                  </Text>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <ButtonGroup spacing={30} mt={30}>
                  <Link href="/menu">
                    <Button
                      size="lg"
                      borderRadius="none"
                      fontFamily="Open Sans"
                      color="white"
                      border="1px solid #DCB015"
                      className={btnStyles.btnContainer}
                      _hover={{ color: "#DCB015" }}
                    >
                      View Menu
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      borderRadius="none"
                      fontFamily="Open Sans"
                      color="white"
                      border="1px solid #DCB015"
                      className={btnStyles.btnContainer}
                      _hover={{ color: "#DCB015" }}
                    >
                      Reserve
                    </Button>
                  </Link>
                </ButtonGroup>
              </motion.div>
            </Box>
          </Box>
        </Layout>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
