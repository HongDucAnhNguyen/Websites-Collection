import {
  Box,
  Button,
  ChakraBaseProvider,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import aboutImg from "../../public/assets/images/about_us.jpg";
import SectionHeading from "../GlobalComponents/SectionHeading";
import styles from "../../app/styles/button.module.css";
const AboutUsSection = () => {
  return (
    <Box bg="black" color="white">
      <Layout>
        <Box maxWidth="1000" width="100%">
          <Flex mt={20} mb={20} justifyContent="space-between">
           
              <Box position="relative" height={460} width={480}>
                <Image fill={true} src={aboutImg} alt="about"></Image>
              </Box>
           

            <Box>
              <SectionHeading
                maxWidth={500}
                content="About Us"
              ></SectionHeading>
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
              <Text
                marginTop={5}
                fontSize={18}
                color="white"
                fontFamily={"Open Sans"}
                width={400}
              >
                From our roots as a family-owned bistro to our current standing
                as a distinguished establishment, we offer an unforgettable
                dining experience.
              </Text>
              <Text
                marginTop={5}
                fontSize={18}
                color="white"
                fontFamily={"Open Sans"}
                width={400}
              >
                Join us as we blend passion, flavor, and hospitality to create
                moments that linger long after the last bite.
              </Text>
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
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  );
};

export default AboutUsSection;
