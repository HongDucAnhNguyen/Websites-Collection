import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import SectionHeading from "../GlobalComponents/SectionHeading";
import { IoIosPricetag } from "react-icons/io";
import { LuPackageCheck } from "react-icons/lu";
import { IoIosPricetags } from "react-icons/io";
import { MdDescription } from "react-icons/md";
import styles from '../../app/styles/responsive/services.module.css'
const PrivateRoomServiceInfoSection = () => {
  return (
    <Box bg="black">
      <Layout>
        <Box mt={20} mb={20}>
          <SectionHeading
            align="center"
            content="Service Details"
          ></SectionHeading>
          <Grid  mt={10} className={styles.serviceInfoGridContainer} gap={20}>
            <GridItem pl={5} pr={5}>
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Description{" "}
                </Heading>
                <MdDescription></MdDescription>
              </HStack>
              <Stack gap={5} mt={5}>
                <Text fontSize={18} color="white">
                  Elevate your dining experience with our exclusive private room
                  at LeClaire. Perfect for intimate gatherings, business
                  meetings, or special celebrations, our private space offers a
                  secluded and elegant setting for your next event.
                </Text>
                <Text fontSize={18} color="white">
                  {" "}
                  Enjoy personalized service, customized menus, and a dedicated
                  staff to cater to your every need.
                </Text>
              </Stack>
            </GridItem>
            <GridItem pl={5} pr={5}w="100%">
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Detailed Pricing Information{" "}
                </Heading>
                <IoIosPricetags></IoIosPricetags>
              </HStack>
              <Stack gap={5} mt={5}>
                <Text fontSize={18} color="white">
                  Pricing varies based on the day of the week, time of day,
                  duration of the event, and any special requests.
                </Text>
                <Text fontSize={18} color="white">
                  Weekday rates are typically lower than weekend rates.
                </Text>
                <Text fontSize={18} color="white">
                  Additional charges may apply for customized menus,
                  decorations, audiovisual equipment, and other special
                  services.
                </Text>
              </Stack>
            </GridItem>{" "}
            <GridItem pl={5} pr={5}w="100%">
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Average Pricing Range
                </Heading>
                <IoIosPricetag></IoIosPricetag>
              </HStack>

              <Stack gap={5} mt={5}>
                <Text fontSize={18} color="white">
                  Weekdays (Monday-Thursday): <br></br> $500-$1000
                </Text>
                <Text fontSize={18} color="white">
                  Weekends (Friday-Sunday): <br></br> $1000-$2000
                </Text>
              </Stack>
            </GridItem>{" "}
            <GridItem pl={5} pr={5}w="100%">
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Included{" "}
                </Heading>
                <LuPackageCheck></LuPackageCheck>
              </HStack>
              <Stack gap={5} mt={5}>
                <Text fontSize={18} color="white">
                  Exclusive use of the private room for the specified duration
                </Text>
                <Text fontSize={18} color="white">
                  Personalized menu options curated by our executive chef
                </Text>
                <Text fontSize={18} color="white">
                  {" "}
                  Dedicated staff to assist with service and ensure a seamless
                  experience
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Box>
      </Layout>
    </Box>
  );
};

export default PrivateRoomServiceInfoSection;
