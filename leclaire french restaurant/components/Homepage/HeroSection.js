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

const HeroSection = () => {
  return (
    <Box>
      <div className={styles.heroSection}>
        <Layout>
          <Box maxWidth="1000" width="100%">
            <Box ml={30}>
              <SectionHeading
                size={64}
                maxWidth={500}
                content="Authentic French Cuisine"
              ></SectionHeading>
              <Text
                mt={30}
                fontSize={18}
                color="white"
                fontFamily={"Open Sans"}
                maxWidth="300"
              >
                Serving our customers a taste of France in every bite.
              </Text>
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
            </Box>
          </Box>
        </Layout>
      </div>
    </Box>
  );
};

export default HeroSection;
