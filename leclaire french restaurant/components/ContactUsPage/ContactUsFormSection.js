import {
  Box,
  FormControl,
  Button,
  Flex,
  Heading,
  Input,
  Textarea,
  Text,
  HStack,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import headingbtnStyles from "../../app/styles/navbar.module.css";
import Link from "next/link";
import btnStyles from "../../app/styles/button.module.css";
import ggMapsImg from "../../public/assets/images/ggmaps.jpg";
import Image from "next/image";

const ContactUsFormSection = () => {
  return (
    <Box bg="#303030">
      <Layout>
        <Flex mt={20} mb={20} gap={20} justifyContent="space-around">
          <Box bg="black" borderRadius={10} p={10}>
            <Box className={headingbtnStyles.Logo}>
              <Link href="/">
                <Heading display="inline-block" fontSize={32} fontFamily={"Open Sans"}>
                  Leclaire
                </Heading>
              </Link>
            </Box>
            <Text
              mt={5}
              maxWidth={500}
              color="white"
              fontFamily="Open Sans"
              fontSize={18}
            >
              Use the form below to get in touch with us, whether you're looking
              to make a reservation, have questions about our menu, or wish to
              discuss special arrangements, we're here to assist you every step
              of the way. We usually reply within 48 hours.
            </Text>
            <Box mt={10}>
              <form style={{ width: "100%" }}>
                <FormControl isRequired>
                  <Input
                    borderRadius="none"
                    bg="white"
                    size="lg"
                    type="email"
                    placeholder="Email"
                  />
                </FormControl>
                <FormControl isRequired>
                  <Input
                    mt={10}
                    borderRadius="none"
                    bg="white"
                    size="lg"
                    type="text"
                    placeholder="Subject"
                  />
                </FormControl>{" "}
                <FormControl isRequired>
                  <Textarea
                    height={150}
                    maxH={150}
                    mt={10}
                    borderRadius="none"
                    bg="white"
                    size="lg"
                    type="text"
                    placeholder="Message"
                  />
                </FormControl>
                <Flex mt={5} justifyContent="center">
                  {" "}
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
                    Send Message
                  </Button>
                </Flex>
              </form>
            </Box>
          </Box>
          <Box>
            <Heading color="white" fontSize={20} fontFamily={"Open Sans"}>
              View location on Maps
            </Heading>
            <Link
              title="click to open google maps"
              href="https://maps.app.goo.gl/oz9AR3BN7KRgVPCbA"
            >
              {" "}
              <Box mt={5} position="relative" width={350} height={300}>
                <Image
                  alt="google maps directions"
                  fill={true}
                  src={ggMapsImg}
                ></Image>
              </Box>
            </Link>

            <Box color="white" mt={20}>
              <Box>
                {" "}
                <Heading fontSize={20} fontFamily={"Open Sans"}>
                  Direct Contact Information
                </Heading>
                <HStack mt={5}>
                  <MdEmail></MdEmail>
                  <Text color="white" fontFamily="Open Sans" fontSize={18}>
                    leclairemail@mail.com
                  </Text>
                </HStack>
                <HStack mt={5} alignItems="center">
                  <FaLocationDot></FaLocationDot>
                  <Text color="white" fontFamily="Open Sans" fontSize={18}>
                    [restaurant address]
                  </Text>
                </HStack>
                <HStack mt={5} alignItems="center">
                  <FaPhone></FaPhone>
                  <Text color="white" fontFamily="Open Sans" fontSize={18}>
                    (+1) [restaurant number]
                  </Text>
                </HStack>
              </Box>
            </Box>

            <Box mt={20} color="white">
              {" "}
              <Heading fontSize={20} fontFamily={"Open Sans"}>
                Opening Hours
              </Heading>
              <Text mt={5} fontFamily="Open Sans" fontSize={18}>
                Sat-Sun : 9am-11pm
              </Text>
              <Text mt={5} fontFamily="Open Sans" fontSize={18}>
                Mon-Fri : 11am-11pm
              </Text>
            </Box>
          </Box>
        </Flex>
      </Layout>
    </Box>
  );
};

export default ContactUsFormSection;
