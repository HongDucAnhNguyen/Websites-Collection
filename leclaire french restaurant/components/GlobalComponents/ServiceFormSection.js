import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import Layout from "./Layout";
import SectionHeading from "./SectionHeading";
import btnStyles from "../../app/styles/button.module.css";
const ServiceFormSection = ({ maxGuests }) => {
  return (
    <Box bg="#303030">
      <Layout>
        <Box mt={20} mb={20}>
          <Stack alignItems="center">
            <SectionHeading
              content="Book A Reservation"
              align="center"
            ></SectionHeading>
            <Text
              textAlign="center"
              color="white"
              fontSize={18}
              fontFamily="Open Sans"
              maxW={400}
            >
              Use the form below to specify your reservation detalis. We usually
              reply within 2 hours, we look forward to speaking with you!
            </Text>
            <Box mt={5}>
              <form>
                <Flex gap={6}>
                  {" "}
                  <FormControl isRequired color="white" fontFamily="Open Sans">
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      borderRadius="none"
                      bg="white"
                      type="text"
                      placeholder="Full name"
                    ></Input>
                  </FormControl>
                  <FormControl isRequired color="white" fontFamily="Open Sans">
                    <FormLabel>Email</FormLabel>
                    <Input
                      borderRadius="none"
                      bg="white"
                      type="email"
                      placeholder="Email"
                    ></Input>
                  </FormControl>
                </Flex>
                <Stack gap={5} mt={5}>
                  <Flex gap={6}>
                    <FormControl
                      isRequired
                      color="white"
                      fontFamily="Open Sans"
                    >
                      <FormLabel>Phone number</FormLabel>
                      <Input
                        borderRadius="none"
                        bg="white"
                        type="tel"
                        placeholder="Phone number"
                      ></Input>
                    </FormControl>
                    <FormControl
                      isRequired
                      color="white"
                      fontFamily="Open Sans"
                    >
                      <FormLabel>Number of Guests</FormLabel>
                      <Input
                        borderRadius="none"
                        bg="white"
                        type="number"
                        placeholder="# of Guests"
                        min={1}
                        max={maxGuests}
                      ></Input>
                    </FormControl>
                  </Flex>
                  <FormControl isRequired fontFamily="Open Sans">
                    <FormLabel color="white">Booking Date</FormLabel>
                    <Input
                      borderRadius="none"
                      bg="white"
                      type="date"
                      placeholder="Booking date"
                    ></Input>
                  </FormControl>
                  <FormControl isRequired color="white" fontFamily="Open Sans">
                    <FormLabel>Special Requests</FormLabel>
                    <Textarea
                      minH={240}
                      borderRadius="none"
                      bg="white"
                      type="text"
                      placeholder="Special Requests (diet restrictions, accomodations, birthdays, etc...)"
                    ></Textarea>
                  </FormControl>
                </Stack>
                <Button
                  className={btnStyles.btnContainer}
                  width="100%"
                  borderRadius="none"
                  color="white"
                  border="1px solid #DCB015"
                  mt={4}
                  fontFamily="Open Sans"
                  type="submit"
                  size="lg"
                  _hover={{ color: "#DCB015" }}
                >
                  Book Reservation
                </Button>
              </form>
            </Box>
          </Stack>
        </Box>
      </Layout>
    </Box>
  );
};

export default ServiceFormSection;
