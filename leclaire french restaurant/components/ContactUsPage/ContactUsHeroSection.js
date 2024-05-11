import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import SectionHeading from "../GlobalComponents/SectionHeading";
import styles from "../../app/styles/hero.module.css";
const ContactUsHeroSection = () => {
  return (
    <Box>
      <Box className={styles.contactUsHeroSection}>
        <Layout>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <SectionHeading
              size={64}
              align="center"
              content="Contact Us"
            ></SectionHeading>
            <Text
              align="center"
              color="white"
              fontFamily="Open Sans"
              fontSize={18}
              maxWidth={500}
              pl={5} pr={5}
            >
              Have a question, comment, or reservation request? Feel free to
              reach out to us ! Whether you're planning a special event, seeking
              information about our menu, or simply want to share your feedback,
              we're eager to hear from you
            </Text>
          </Flex>
        </Layout>
      </Box>
    </Box>
  );
};

export default ContactUsHeroSection;
