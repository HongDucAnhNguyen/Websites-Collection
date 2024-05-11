"use client";

import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Text,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import SectionHeading from "../GlobalComponents/SectionHeading";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import responsiveStyles from "../../app/styles/responsive/homepage.module.css";
const TestimonialsSection = () => {
  return (
    <Box bg="#303030">
      <Layout>
        <Box mt={20} mb={20}>
          <Box className={responsiveStyles.testimonialsSectionContainer}>
            <SectionHeading
              content="Testimonials"
              maxWidth={500}
            ></SectionHeading>
            <Text
              maxW={400}
              fontFamily="Open Sans"
              fontSize={18}
              mt={2}
              color="white"
              className={responsiveStyles.testimonialDescriptionText}
            >
              Don't just take our words, view testimonials from our real
              customers.
            </Text>
            {/* <Flex justifyContent="flex-end">
            <ButtonGroup>
              <IconButton icon={<FaChevronLeft />}></IconButton>
              <IconButton icon={<FaChevronRight />}></IconButton>
            </ButtonGroup>
          </Flex> */}

            <Grid
              className={responsiveStyles.testimonialsGridContainer}
              gap={10}
              mt={10}
              p={2}
            >
              <Box
                className={responsiveStyles.testimonialsContainer}
                p={5}
                borderRadius={10}
                
                bg="white"
              >
                <Text
                  mt={5}
                  color="gray"
                  fontFamily="Open Sans"
                  fontSize={18}
                  fontWeight="semi-bold"
                >
                  "Celebrating at LeClaire was an unforgettable experience! The
                  ambiance was enchanting, the cuisine exceptional, and the
                  service impeccable. Looking forward to returning soon!"
                </Text>

                <Text
                  mt={5}
                  fontFamily="Open Sans"
                  fontSize={18}
                  fontWeight="bold"
                >
                  Johan Bordeaux
                </Text>
              </Box>
              <Box
                className={responsiveStyles.testimonialsContainer}
                p={5}
                borderRadius={10}
                
                bg="white"
              >
                <Text
                  mt={5}
                  color="gray"
                  fontFamily="Open Sans"
                  fontSize={18}
                  fontWeight="semi-bold"
                >
                  "LeClaire impressed me beyond measure! The atmosphere was
                  captivating, the cuisine exquisite, and the service flawless.
                  Already looking forward to my next visit!"
                </Text>

                <Text
                  mt={5}
                  fontFamily="Open Sans"
                  fontSize={18}
                  fontWeight="bold"
                >
                  Louis Mouton
                </Text>
              </Box>{" "}
              <Box
                className={responsiveStyles.testimonialsContainer}
                p={5}
                borderRadius={10}
               
                bg="white"
              >
                <Text
                  mt={5}
                  color="gray"
                  fontFamily="Open Sans"
                  fontSize={18}
                  fontWeight="semi-bold"
                >
                  "LeClaire was an absolute delight! The ambiance was
                  enchanting, the food divine, and the service impeccable. Can't
                  wait to return for another memorable experience!"
                </Text>

                <Text
                  mt={5}
                  fontFamily="Open Sans"
                  fontSize={18}
                  fontWeight="bold"
                >
                  Michelle Bernard
                </Text>
              </Box>
            </Grid>
          </Box>{" "}
        </Box>
      </Layout>
    </Box>
  );
};

export default TestimonialsSection;
