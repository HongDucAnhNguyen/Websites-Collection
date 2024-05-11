import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import btnStyles from "../../app/styles/button.module.css";
import Image from "next/image";
import privateRoomService1 from "../../public/assets/images/service1.jpg";
import largeGroupsService2 from "../../public/assets/images/service2.jpg";
import weddingsService3 from "../../public/assets/images/service3.jpg";
import Link from "next/link";
import responsiveStyles from "../../app/styles/responsive/allservices.module.css";
const ParentAllServicesSection = () => {
  return (
    <Box bg="black">
      <Layout>
        <Flex direction="column" p={5} mb={20} mt={20} gap={10}>
          <Flex
            className={responsiveStyles.serviceContainer}
            borderRadius={7}
            justifyContent="space-between"
            alignItems="center"
            color="white"
            bg="#303030"
            gap={10}
            p={10}
          >
            <Box
              position="relative"
              className={responsiveStyles.serviceContainerImg}
            >
              <Image
                style={{ objectFit: "cover" }}
                fill={true}
                src={privateRoomService1}
                alt="private room service"
              ></Image>
            </Box>

            <Box>
              <Heading
                fontFamily={"Jacques"}
                color="#DCB015"
                size="lg"
                fontWeight="normal"
              >
                Private Room
              </Heading>
              <Text fontSize={18} maxW={500} mt={5}>
                Perfect for intimate gatherings, business meetings, or special
                celebrations. Accommodates groups of up to 4 guests comfortably.
                Enjoy personalized service, custom menus crafted to your tastes,
                and soak in the secluded ambiance that sets the stage for
                memorable moments.
              </Text>
              <Link href="/services/private-room">
                {" "}
                <Button
                  size="lg"
                  mt={10}
                  borderRadius="none"
                  fontFamily="Open Sans"
                  color="white"
                  border="1px solid #DCB015"
                  className={btnStyles.btnContainer}
                  _hover={{ color: "#DCB015" }}
                >
                  Learn More
                </Button>
              </Link>
            </Box>
          </Flex>

          <Flex
            className={responsiveStyles.serviceContainer}
            borderRadius={7}
            justifyContent="space-between"
            alignItems="center"
            color="white"
            bg="#303030"
            gap={20}
            p={10}
          >
            <Box
              position="relative"
              className={responsiveStyles.serviceContainerImg}
            >
              <Image
                style={{ objectFit: "cover" }}
                fill={true}
                src={largeGroupsService2}
                alt="private room service"
              ></Image>
            </Box>

            <Box>
              <Heading
                fontFamily={"Jacques"}
                color="#DCB015"
                size="lg"
                fontWeight="normal"
              >
                Large groups
              </Heading>
              <Text fontSize={18} maxW={500} mt={5}>
                Elevate your next family reunion, corporate event, or group
                dinner with LeClaire's exceptional dining experience. Our
                inviting atmosphere and attentive service make us the ideal
                venue for gatherings of 8 guests or more. Explore our special
                group menus, crafted to ensure every moment shared is memorable
                and every palate satisfied.
              </Text>
              <Link href="/services/large-groups">
                <Button
                  size="lg"
                  mt={10}
                  borderRadius="none"
                  fontFamily="Open Sans"
                  color="white"
                  border="1px solid #DCB015"
                  className={btnStyles.btnContainer}
                  _hover={{ color: "#DCB015" }}
                >
                  Learn More
                </Button>
              </Link>
            </Box>
          </Flex>

          <Flex
            className={responsiveStyles.serviceContainer}
            borderRadius={7}
            justifyContent="space-between"
            alignItems="center"
            color="white"
            bg="#303030"
            gap={20}
            p={10}
          >
            <Box
              position="relative"
              className={responsiveStyles.serviceContainerImg}
            >
              <Image
                style={{ objectFit: "cover" }}
                fill={true}
                src={weddingsService3}
                alt="private room service"
              ></Image>
            </Box>

            <Box>
              <Heading
                fontFamily={"Jacques"}
                color="#DCB015"
                size="lg"
                fontWeight="normal"
              >
                Weddings
              </Heading>
              <Text fontSize={18} maxW={500} mt={5}>
                Celebrate your special day amidst the elegance and romance of
                LeClaire. Our tailored wedding packages offer personalized
                touches to make your celebration truly unique. From intimate
                ceremonies to grand receptions, our dedicated event coordinator
                will guide you every step of the way, ensuring your wedding day
                is as magical as you've always dreamed.
              </Text>
              <Link href="/services/weddings">
                {" "}
                <Button
                  size="lg"
                  mt={10}
                  borderRadius="none"
                  fontFamily="Open Sans"
                  color="white"
                  border="1px solid #DCB015"
                  className={btnStyles.btnContainer}
                  _hover={{ color: "#DCB015" }}
                >
                  Learn More
                </Button>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Layout>
    </Box>
  );
};

export default ParentAllServicesSection;
