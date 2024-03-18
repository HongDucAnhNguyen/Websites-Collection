"use client";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../../app/styles/navbar.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import btnStyles from "../../app/styles/button.module.css";
import { motion } from "framer-motion";
import { HStack } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <Box bg="black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
      >
        <Layout>
          <motion.div
            whileInView={{
              transition: {
                staggerChildren: 0.1,
              },
            }}
          ></motion.div>
          <Flex justifyContent="space-evenly" mt={20} mb={20} gap={10}>
            <motion.div
              initial={{ y: 20 }}
              whileInView={{
                y: 0,
              }}
              viewport={{ once: true }}
            >
              {" "}
              <Box maxWidth={290} ml={30} className={styles.Logo}>
                <Box display="inline-block">
                  <Link href="/">
                    <Heading fontSize={30} fontFamily={"Open Sans"}>
                      Leclaire
                    </Heading>
                  </Link>
                </Box>

                <Text
                  mt={5}
                  color="white"
                  fontFamily={"Open Sans"}
                  fontSize={18}
                >
                  LeClaire is a celebrated French restaurant in Calgary,
                  blending tradition and innovation to create unforgettable
                  dining experiences.
                </Text>
                <Link href="/menu">
                  <Button
                    borderRadius="none"
                    fontFamily="Open Sans"
                    color="white"
                    border="1px solid #DCB015"
                    className={btnStyles.btnContainer}
                    _hover={{ color: "#DCB015" }}
                    mt={5}
                  >
                    View Menu
                  </Button>
                </Link>
              </Box>
            </motion.div>
            <motion.div
              initial={{ y: 20 }}
              whileInView={{
                y: 0,
              }}
              viewport={{ once: true }}
            >
              <Box color="white">
                <Heading fontSize={20} fontFamily={"Open Sans"}>
                  Our Services
                </Heading>
                <Link href="/services/private-room">
                  {" "}
                  <Text
                    mt={5}
                    color="white"
                    fontFamily={"Open Sans"}
                    fontSize={18}
                  >
                    Private Room
                  </Text>
                </Link>

                <Link href="/services/large-groups">
                  {" "}
                  <Text
                    mt={5}
                    color="white"
                    fontFamily={"Open Sans"}
                    fontSize={18}
                  >
                    Large Groups
                  </Text>
                </Link>
                <Link href="/services/weddings">
                  {" "}
                  <Text
                    mt={5}
                    color="white"
                    fontFamily={"Open Sans"}
                    fontSize={18}
                  >
                    Weddings
                  </Text>
                </Link>
                <Link href="/services">
                  {" "}
                  <Button
                    borderRadius="none"
                    fontFamily="Open Sans"
                    color="white"
                    border="1px solid #DCB015"
                    className={btnStyles.btnContainer}
                    _hover={{ color: "#DCB015" }}
                    mt={5}
                  >
                    Learn More
                  </Button>
                </Link>
              </Box>
            </motion.div>
            <motion.div
              initial={{ y: 20 }}
              whileInView={{
                y: 0,
              }}
              viewport={{ once: true }}
            >
              <Box color="white">
                <Box>
                  {" "}
                  <Heading fontSize={20} fontFamily={"Open Sans"}>
                    Contact Us
                  </Heading>
                  <HStack mt={5}>
                    <MdEmail></MdEmail>
                    <Text color="white" fontFamily="Open Sans" fontSize={18}>
                      leclairemail@mail.com
                    </Text>
                  </HStack>
                  <HStack mt={5} alignItems="center">
                    <FaLocationDot></FaLocationDot>
                    <Text color="white" fontFamily="Open Sans" fontSize={18}>
                      [restaurant address]
                    </Text>
                  </HStack>
                  <HStack mt={5} alignItems="center">
                    <FaPhone></FaPhone>
                    <Text color="white" fontFamily="Open Sans" fontSize={18}>
                      (+1) [restaurant number]
                    </Text>
                  </HStack>
                  <Link href="/contact">
                    <Button
                      borderRadius="none"
                      fontFamily="Open Sans"
                      color="white"
                      border="1px solid #DCB015"
                      className={btnStyles.btnContainer}
                      _hover={{ color: "#DCB015" }}
                      mt={5}
                    >
                      Contact Us
                    </Button>
                  </Link>
                </Box>
              </Box>
            </motion.div>
            <motion.div
              initial={{ y: 20 }}
              whileInView={{
                y: 0,
              }}
              viewport={{ once: true }}
            >
              <Box color="white">
                <Heading fontSize={20} fontFamily={"Open Sans"}>
                  Socials
                </Heading>
                <Flex mt={5} gap={3}>
                  <Link href="/">
                    <FaFacebook />
                  </Link>
                  <Link href="/">
                    <FaInstagram />
                  </Link>
                </Flex>
                <Box mt={7}>
                  {" "}
                  <Heading fontSize={20} fontFamily={"Open Sans"}>
                    Opening Hours
                  </Heading>
                  <Text
                    mt={5}
                    color="white"
                    fontFamily="Open Sans"
                    fontSize={18}
                  >
                    Sat-Sun : 9am-11pm
                  </Text>
                  <Text
                    mt={5}
                    color="white"
                    fontFamily="Open Sans"
                    fontSize={18}
                  >
                    Mon-Fri : 11am-11pm
                  </Text>
                </Box>
              </Box>
            </motion.div>
          </Flex>
          <Box p={5} color="white" textAlign="center">
            <Text>© 2024 Hong Duc Anh Nguyen. All Rights Reserved.</Text>
          </Box>
        </Layout>
      </motion.div>
    </Box>
  );
};

export default Footer;
