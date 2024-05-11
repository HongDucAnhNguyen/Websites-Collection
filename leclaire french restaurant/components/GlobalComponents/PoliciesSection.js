import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Layout from "./Layout";
import SectionHeading from "./SectionHeading";
import { HiMiniReceiptRefund } from "react-icons/hi2";
import { MdFreeCancellation } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";
import styles from "../../app/styles/responsive/services.module.css";

const PoliciesSection = ({ cancellationTimeLimit }) => {
  return (
    <Box bg="#303030">
      <Layout>
        <Box mt={20} mb={20}>
          <SectionHeading
            align="center"
            content="Service Policies"
          ></SectionHeading>
          <Grid
            mt={10}
            className={styles.servicePoliciesGridContainer}
            gap={20}
          >
            <GridItem pl={5} pr={5} w="100%">
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Cancellation Policy{" "}
                </Heading>
                <MdFreeCancellation></MdFreeCancellation>
              </HStack>

              <Text mt={5} fontSize={18} color="white">
                Cancellations or any reservation changes made less than{" "}
                {cancellationTimeLimit > 1000 ? 1 : cancellationTimeLimit}{" "}
                {cancellationTimeLimit > 1000 ? "month " : "hours "}
                before the reservation may incur a cancellation fee.
              </Text>
            </GridItem>
            <GridItem pl={5} pr={5} w="100%">
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Refund Policy{" "}
                </Heading>
                <HiMiniReceiptRefund></HiMiniReceiptRefund>
              </HStack>

              <Text mt={5} fontSize={18} color="white">
                Refunds are subject to the cancellation policy and may be issued
                in the form of a credit towards a future reservation.
              </Text>
            </GridItem>

            <GridItem pl={5} pr={5} w="100%">
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Security Deposit{" "}
                </Heading>
                <MdOutlineSecurity></MdOutlineSecurity>
              </HStack>

              <Text mt={5} fontSize={18} color="white">
                A security deposit may be required to secure the reservation,
                which will be refunded after the event, subject to any damages
                or additional charges.
              </Text>
            </GridItem>

            <GridItem pl={5} pr={5} w="100%">
              <HStack color="#DCB015">
                <Heading fontSize={20} fontWeight="bold" fontFamily="Open Sans">
                  Additional Charges
                </Heading>
                <MdPriceChange></MdPriceChange>
              </HStack>

              <Text mt={5} fontSize={18} color="white">
                Any additional services or upgrades requested beyond the
                standard package may incur additional charges.
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </Layout>
    </Box>
  );
};

export default PoliciesSection;
