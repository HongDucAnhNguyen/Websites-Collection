"use client";

import { Box, ButtonGroup, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import SectionHeading from "../GlobalComponents/SectionHeading";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const TestimonialsSection = () => {
  return (
    <Box bg="#303030">
      <Layout>
        <Box mt={20} mb={20}>
          {" "}
          <SectionHeading
            content="Testimonials"
            maxWidth={500}
          ></SectionHeading>
          <Text
            maxW={500}
            fontFamily="Open Sans"
            fontSize={18}
            mt={2}
            color="white"
          >
            Don't just take our words, view testimonials from our real
            customers.
          </Text>
          <Flex justifyContent="flex-end">
            <ButtonGroup>
              <IconButton
                icon={<ChevronLeftIcon></ChevronLeftIcon>}
              ></IconButton>
              <IconButton
                icon={<ChevronRightIcon></ChevronRightIcon>}
              ></IconButton>
            </ButtonGroup>
          </Flex>
          <Flex mt={5} gap={10} justifyContent="space-evenly">
            <Box p={5} borderRadius={10} height={300} width={300} bg="white">
              <Text
                mt={5}
                color="gray"
                fontFamily="Open Sans"
                fontSize={18}
                fontWeight="semi-bold"
              >
                “LeClaire exceeded my expectations! The ambiance was
                captivating, the food divine, and the service impeccable. Can't
                wait to return! “
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
            <Box p={5} borderRadius={10} height={300} width={300} bg="white">
              <Text
                mt={5}
                color="gray"
                fontFamily="Open Sans"
                fontSize={18}
                fontWeight="semi-bold"
              >
                “LeClaire exceeded my expectations! The ambiance was
                captivating, the food divine, and the service impeccable. Can't
                wait to return! “
              </Text>

              <Text
                mt={5}
                fontFamily="Open Sans"
                fontSize={18}
                fontWeight="bold"
              >
                Johan Bordeaux
              </Text>
            </Box>{" "}
            <Box p={5} borderRadius={10} height={300} width={300} bg="white">
              <Text
                mt={5}
                color="gray"
                fontFamily="Open Sans"
                fontSize={18}
                fontWeight="semi-bold"
              >
                “LeClaire exceeded my expectations! The ambiance was
                captivating, the food divine, and the service impeccable. Can't
                wait to return! “
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
          </Flex>
        </Box>
      </Layout>
    </Box>
  );
};

export default TestimonialsSection;
