import React from "react";
import Layout from "../GlobalComponents/Layout";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../../app/styles/navbar.module.css";
import FaceBookIconOutline from "../IconComponents/FaceBookIconOutline";
import InstaIcon from "../IconComponents/InstaIcon";
import btnStyles from "../../app/styles/button.module.css";

const Footer = () => {
  return (
    <Box bg="black">
      <Layout>
        <Box maxWidth="1000" width="100%">
          <Flex justifyContent="space-evenly" mt={20} mb={20} gap={10}>
            <Box maxWidth={290} ml={30} className={styles.Logo}>
              <Link href="/">
                <Heading fontSize={30} fontFamily={"Open Sans"}>
                  Leclaire
                </Heading>
              </Link>
              <Text mt={5} color="white" fontFamily={"Open Sans"} fontSize={18}>
                LeClaire is a celebrated French restaurant in Calgary, blending
                tradition and innovation to create unforgettable dining
                experiences.
              </Text>
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
            </Box>
            <Box color="white">
              <Heading fontSize={20} fontFamily={"Open Sans"}>
                Our Services
              </Heading>
              <Link href="/services/private-rooms">
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
            </Box>
            <Box color="white">
              <Box>
                {" "}
                <Heading fontSize={20} fontFamily={"Open Sans"}>
                  Contact Us
                </Heading>
                <Text mt={5} color="white" fontFamily="Open Sans" fontSize={18}>
                  leclairemail@mail.com
                </Text>
                <Text mt={5} color="white" fontFamily="Open Sans" fontSize={18}>
                  [restaurant address]
                </Text>
                <Text mt={5} color="white" fontFamily="Open Sans" fontSize={18}>
                  (+1) [restaurant number]
                </Text>
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
              </Box>
            </Box>
            <Box color="white">
              <Heading fontSize={20} fontFamily={"Open Sans"}></Heading>
            </Box>
            <Box color="white">
              <Heading fontSize={20} fontFamily={"Open Sans"}>
                Socials
              </Heading>
              <Flex mt={5} gap={3}>
                <Link href="/">
                  <FaceBookIconOutline />
                </Link>
                <Link href="/">
                  <InstaIcon />
                </Link>
              </Flex>
              <Box mt={7}>
                {" "}
                <Heading fontSize={20} fontFamily={"Open Sans"}>
                  Opening Hours
                </Heading>
                <Text mt={5} color="white" fontFamily="Open Sans" fontSize={18}>
                  Sat-Sun : 9am-11pm
                </Text>
                <Text mt={5} color="white" fontFamily="Open Sans" fontSize={18}>
                  Mon-Fri : 11am-11pm
                </Text>
              </Box>
            </Box>
          </Flex>
          <Box p={5} color="white" textAlign="center">
            <Text>© 2020 Hong Duc Anh Nguyen. All Rights Reserved.</Text>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Footer;
