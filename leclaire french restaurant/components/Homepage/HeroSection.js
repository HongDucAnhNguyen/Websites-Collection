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
import { motion } from "framer-motion";
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
        className={styles.heroSection}
      >
        <Layout>
         
            <Box ml={30}>
              <motion.div variants={itemVariants}>
                <SectionHeading
                  size={64}
                  maxWidth={500}
                  content="Authentic French Cuisine"
                ></SectionHeading>
              </motion.div>
              <motion.div variants={itemVariants}>
                {" "}
                <Text
                  mt={30}
                  fontSize={18}
                  color="white"
                  fontFamily={"Open Sans"}
                  maxWidth="300"
                >
                  Serving our customers a taste of France in every bite.
                </Text>
              </motion.div>

              <motion.div variants={itemVariants}>
                <ButtonGroup spacing={30} mt={30}>
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
                </ButtonGroup>
              </motion.div>
            </Box>
         
        </Layout>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
