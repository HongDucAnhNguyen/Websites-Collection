"use client";
import {
  Box,
  Button,
  ChakraBaseProvider,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import aboutImg from "../../public/assets/images/about_us.jpg";
import SectionHeading from "../GlobalComponents/SectionHeading";
import styles from "../../app/styles/button.module.css";
import { motion } from "framer-motion";
const AboutUsSection = () => {
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
    <Box bg="black" color="white">
      <Layout>
      
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Flex mt={20} mb={20} justifyContent="space-between">
              <motion.div variants={itemVariants}>
                <Box position="relative" height={460} width={480}>
                  <Image fill={true} src={aboutImg} alt="about"></Image>
                </Box>
              </motion.div>

              <Box>
                <motion.div variants={itemVariants}>
                  <SectionHeading
                    maxWidth={500}
                    content="About Us"
                  ></SectionHeading>
                </motion.div>
                <motion.div variants={itemVariants}>
                  {" "}
                  <Text
                    marginTop={5}
                    fontSize={18}
                    color="white"
                    fontFamily={"Open Sans"}
                    width={400}
                  >
                    Welcome to LeClaire, where French culinary tradition meets
                    modern innovation in Calgary.
                  </Text>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Text
                    marginTop={5}
                    fontSize={18}
                    color="white"
                    fontFamily={"Open Sans"}
                    width={400}
                  >
                    From our roots as a family-owned bistro to our current
                    standing as a distinguished establishment, we offer an
                    unforgettable dining experience.
                  </Text>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Text
                    marginTop={5}
                    fontSize={18}
                    color="white"
                    fontFamily={"Open Sans"}
                    width={400}
                  >
                    Join us as we blend passion, flavor, and hospitality to
                    create moments that linger long after the last bite.
                  </Text>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link href="/about">
                    <Button
                      className={styles.btnContainer}
                      marginTop={10}
                      size="lg"
                      color="white"
                      border="1px solid #DCB015"
                      borderRadius="none"
                      _hover={{ color: "#DCB015" }}
                      fontFamily="Open Sans"
                    >
                      <Text as="h3">About Us</Text>
                    </Button>
                  </Link>
                </motion.div>
              </Box>
            </Flex>
          </motion.div>
       
      </Layout>
    </Box>
  );
};

export default AboutUsSection;
