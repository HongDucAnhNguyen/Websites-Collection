import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import aboutImg from "../../public/assets/images/about_us.jpg";
import SectionHeading from "../GlobalComponents/SectionHeading";
import styles from "../../app/styles/button.module.css";
const AboutUsSection = () => {
  return (
    <Container>
      <Layout>
        <Box maxWidth="1000" width="100%">
          <Flex mt={60} mb={60} justifyContent="space-between">
            <Box>
              <Box position="relative" height={460} width={480}>
                <Image fill={true} src={aboutImg} alt="about"></Image>
              </Box>
            </Box>

            <Box >
              <SectionHeading
                maxWidth={500}
                content="About Us"
              ></SectionHeading>
              <Text
                marginTop={20}
                fontSize={18}
                color="white"
                fontFamily={"Open Sans"}
                width={400}
              >
                Welcome to LeClaire, where French culinary tradition meets
                modern innovation in Calgary.
              </Text>
              <Text
                marginTop={20}
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
                marginTop={20}
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
                marginTop={20}
                width={150}
                color="white"
                bgColor="black"
                border="1px solid #DCB015"
              >
                <Text as="h3">About Us</Text>
              </Button>
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Container>
  );
};

export default AboutUsSection;
