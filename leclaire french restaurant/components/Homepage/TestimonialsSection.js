import { Box, ButtonGroup, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import SectionHeading from "../GlobalComponents/SectionHeading";

const TestimonialsSection = () => {
  return (
    <Box bg="#303030">
      <Layout>
        <Box maxWidth="1000" width="100%">
          <Box mt={20} mb={20}>
            {" "}
            <SectionHeading
              content="Testimonials"
              maxWidth={500}
            ></SectionHeading>
            <Text fontFamily="Open Sans" fontSize={18} mt={2} color="white">
              From our real customers.
            </Text>
            <Flex justifyContent="flex-end">
              <ButtonGroup>
                <IconButton icon={<></>}></IconButton>
                <IconButton></IconButton>
              </ButtonGroup>
            </Flex>
            <Flex mt={5} gap={10} justifyContent="space-evenly">
              <Box borderRadius={10} height={300} width={300} bg="white"></Box>
              <Box borderRadius={10} height={300} width={300} bg="white"></Box>
              <Box borderRadius={10} height={300} width={300} bg="white"></Box>
            </Flex>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default TestimonialsSection;
