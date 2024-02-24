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
    <Container>
      <Container className={styles.heroSection}>
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
                  className={btnStyles.btnContainer}
                  
                >
                  <Heading as="h3">View Menu</Heading>
                </Button>
                <Button
                  className={btnStyles.btnContainer}
                
                >
                  <Heading as="h3">Reserve</Heading>
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Layout>
      </Container>
    </Container>
  );
};

export default HeroSection;
