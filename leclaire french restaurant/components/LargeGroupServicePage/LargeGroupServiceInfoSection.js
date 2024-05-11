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
import styles from "../../app/styles/responsive/services.module.css";

const LargeGroupServiceInfoSection = () => {
  return (
    <Box bg="black">
      <Layout>
        <Box mt={20} mb={20}>
          <SectionHeading
            align="center"
            content="Service Details"
          ></SectionHeading>
          <Grid mt={10} className={styles.serviceInfoGridContainer} gap={20}>
            <GridItem pl={5} pr={5} w="100%">
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Description{" "}
                </Heading>
                <MdDescription></MdDescription>
              </HStack>
              <Stack gap={5} mt={5}>
                <Text fontSize={18} color="white">
                  Gather your friends, family, or colleagues for a memorable
                  dining experience at LeClaire. Our spacious restaurant can
                  accommodate large groups, ensuring everyone can enjoy our
                  exquisite cuisine and impeccable service together.
                </Text>
                <Text fontSize={18} color="white">
                  {" "}
                  Whether it's a corporate event, birthday celebration, or
                  holiday gathering, we have the space and amenities to
                  accommodate your needs.
                </Text>
              </Stack>
            </GridItem>
            <GridItem pl={5} pr={5} w="100%">
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Detailed Pricing Information{" "}
                </Heading>
                <IoIosPricetags></IoIosPricetags>
              </HStack>
              <Stack gap={5} mt={5}>
                <Text fontSize={18} color="white">
                  Pricing is based on a per-person basis or minimum spend
                  requirement for the entire group.
                </Text>
                <Text fontSize={18} color="white">
                  Menu pricing may vary depending on the selected menu options,
                  such as appetizers, entrees, and desserts.
                </Text>
                <Text fontSize={18} color="white">
                  Beverage packages may be available at an additional cost.
                  Additional charges may apply for private dining areas, special
                  menu requests, and additional services.
                </Text>
              </Stack>
            </GridItem>{" "}
            <GridItem pl={5} pr={5} w="100%">
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Average Pricing Range
                </Heading>
                <IoIosPricetag></IoIosPricetag>
              </HStack>

              <Stack gap={5} mt={5}>
                <Text fontSize={18} color="white">
                  Per Person: <br></br> $50-$100 (excluding beverages)
                </Text>
                <Text fontSize={18} color="white">
                  Minimum Spend: <br></br> $1000-$2000 (for groups of 10-20
                  guests)
                </Text>
              </Stack>
            </GridItem>{" "}
            <GridItem pl={5} pr={5} w="100%">
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Included{" "}
                </Heading>
                <LuPackageCheck></LuPackageCheck>
              </HStack>
              <Stack gap={5} mt={5}>
                <Text fontSize={18} color="white">
                  Reserved seating for the specified number of guests
                </Text>
                <Text fontSize={18} color="white">
                  Customized menu options to suit the preferences and dietary
                  restrictions of your group
                </Text>
                <Text fontSize={18} color="white">
                  {" "}
                  Dedicated staff to provide attentive service and ensure a
                  memorable dining experience
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Box>
      </Layout>
    </Box>
  );
};

export default LargeGroupServiceInfoSection;
