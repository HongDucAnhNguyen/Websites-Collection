import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import privateRoomImg from "../../public/assets/images/private_room_service.jpg";
import WeddingServiceImg from "../../public/assets/images/wedding_service.jpg";
import largeGroupsServiceImg from "../../public/assets/images/large_groups_service.jpg";
import Image from "next/image";
import SectionHeading from "../GlobalComponents/SectionHeading";
import btnStyles from "../../app/styles/button.module.css";
const ReservationsSection = () => {
  return (
    <Box bg="#303030">
      <Layout>
        <Box mt={20} mb={20}>
          <SectionHeading align="center" content="Reservations Services" />
          <Flex
            mt={10}
            gap={50}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Box>
              <Box position="relative" mr={30} height={300} width="100%">
                <Image fill={true} src={privateRoomImg} alt="about"></Image>
              </Box>
              <Heading
                as="h3"
                color="#DCB015"
                fontSize={22}
                fontFamily="Open Sans"
                mt={5}
              >
                Private Room
              </Heading>
              <Text
                color="white"
                fontFamily="Open Sans"
                mt={5}
                fontSize={18}
                width={300}
              >
                Perfect for intimate gatherings, business meetings, or special
                celebrations.
              </Text>
              <Text
                color="white"
                fontFamily="Open Sans"
                mt={5}
                fontSize={18}
                width={300}
              >
                Accommodates groups of up to 4 guests.
              </Text>
              <Text
                color="white"
                fontFamily="Open Sans"
                mt={5}
                fontSize={18}
                width={300}
              >
                Enjoy personalized service, custom menus, and a secluded
                ambiance.
              </Text>
              <Button
                marginTop={20}
                size="lg"
                borderRadius="none"
                fontFamily="Open Sans"
                mt={10}
                color="white"
                border="1px solid #DCB015"
                className={btnStyles.btnContainer}
                _hover={{ color: "#DCB015" }}
              >
                Learn More
              </Button>
            </Box>
            <Box>
              {" "}
              <Box position="relative" mr={30} height={300} width="100%">
                <Image
                  fill={true}
                  src={largeGroupsServiceImg}
                  alt="about"
                ></Image>
              </Box>
              <Heading
                as="h3"
                color="#DCB015"
                fontSize={22}
                fontFamily="Open Sans"
                mt={5}
              >
                Large Groups
              </Heading>
              <Text
                color="white"
                fontFamily="Open Sans"
                mt={5}
                fontSize={18}
                width={300}
              >
                Ideal for hosting family reunions, corporate events, or group
                dinners
              </Text>
              <Text
                color="white"
                fontFamily="Open Sans"
                mt={5}
                fontSize={18}
                width={300}
              >
                Accommodates groups of 8 guests or more.
              </Text>
              <Text
                color="white"
                fontFamily="Open Sans"
                mt={5}
                fontSize={18}
                width={300}
              >
                Special group menus available upon request, ensuring a memorable
                dining experience.
              </Text>
              <Button
                marginTop={20}
                size="lg"
                borderRadius="none"
                fontFamily="Open Sans"
                mt={10}
                color="white"
                border="1px solid #DCB015"
                className={btnStyles.btnContainer}
                _hover={{ color: "#DCB015" }}
              >
                Learn More
              </Button>
            </Box>
            <Box>
              {" "}
              <Box position="relative" mr={30} height={300} width="100%">
                <Image fill={true} src={WeddingServiceImg} alt="about"></Image>
              </Box>
              <Heading
                as="h3"
                color="#DCB015"
                fontSize={22}
                fontFamily="Open Sans"
                mt={5}
              >
                Weddings
              </Heading>
              <Text
                color="white"
                fontFamily="Open Sans"
                mt={5}
                fontSize={18}
                width={300}
              >
                Celebrate your special day in the elegant and romantic
                atmosphere of LeClaire.
              </Text>
              <Text
                color="white"
                fontFamily="Open Sans"
                mt={5}
                fontSize={18}
                width={300}
              >
                Tailored wedding packages available.
              </Text>
              <Text
                color="white"
                fontFamily="Open Sans"
                mt={5}
                fontSize={18}
                width={300}
              >
                Dedicated event coordinator to assist with planning.
              </Text>
              <Button
                marginTop={20}
                size="lg"
                borderRadius="none"
                fontFamily="Open Sans"
                mt={10}
                color="white"
                border="1px solid #DCB015"
                className={btnStyles.btnContainer}
                _hover={{ color: "#DCB015" }}
              >
                Learn More
              </Button>
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  );
};

export default ReservationsSection;
