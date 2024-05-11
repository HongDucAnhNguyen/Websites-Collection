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

const WeddingServiceInfoSection = () => {
  return (
    <Box bg="black">
      <Layout>
        <Box mt={20} mb={20}>
          {" "}
          <SectionHeading
            align="center"
            content="Service Details"
          ></SectionHeading>
          <Grid mt={10} className={styles.serviceInfoGridContainer} gap={20}>
            <GridItem pl={5} pr={5}>
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Description{" "}
                </Heading>
                <MdDescription></MdDescription>
              </HStack>
              <Stack gap={5} mt={5}>
                <Text fontSize={18} color="white">
                  Celebrate your special day amidst the elegance and romance of
                  LeClaire. Our experienced events team will work closely with
                  you to create a personalized wedding experience tailored to
                  your vision and budget.
                </Text>
                <Text fontSize={18} color="white">
                  {" "}
                  From intimate ceremonies to grand receptions, we offer
                  flexible wedding packages designed to make your dream wedding
                  a reality.
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
                  Wedding packages typically include venue rental, catering, bar
                  service, and basic décor.
                </Text>
                <Text fontSize={18} color="white">
                  Pricing varies depending on the size of the wedding, day of
                  the week, time of year, and specific requirements. Additional
                  charges may apply for ceremony setup, additional hours,
                  upgrades, and enhancements.
                </Text>
                <Text fontSize={18} color="white">
                  Taxes, gratuity, and service fees are not included in the
                  package prices and will be added to the final bill. Customized
                  pricing quotes are available upon request based on the
                  couple's preferences and budget.
                </Text>
              </Stack>
            </GridItem>{" "}
            <GridItem pl={5} pr={5}>
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Average Pricing Range
                </Heading>
                <IoIosPricetag></IoIosPricetag>
              </HStack>

              <Stack gap={5} mt={5}>
                <Text fontSize={18} color="white">
                  Ceremony and Reception Packages: <br></br> $5000-$10,000
                  (excluding tax and gratuity)
                </Text>
                <Text fontSize={18} color="white">
                  Per Person: <br></br> $100-$200 (including food and beverage)
                </Text>
              </Stack>
            </GridItem>{" "}
            <GridItem pl={5} pr={5}>
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Included{" "}
                </Heading>
                <LuPackageCheck></LuPackageCheck>
              </HStack>
              <Stack gap={5} mt={5}>
                <Text fontSize={18} color="white">
                  Exclusive use of the venue for the ceremony and reception
                </Text>
                <Text fontSize={18} color="white">
                  Customized menu options crafted by our culinary team
                  Professional event coordination services to assist with
                  planning and execution
                </Text>
                <Text fontSize={18} color="white">
                  {" "}
                  Complimentary wedding cake cutting service
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Box>
      </Layout>
    </Box>
  );
};

export default WeddingServiceInfoSection;
