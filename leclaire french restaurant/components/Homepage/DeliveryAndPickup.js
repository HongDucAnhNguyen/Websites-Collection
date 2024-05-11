import { Box, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import SectionHeading from "../GlobalComponents/SectionHeading";
import skipTheDishesImg from "../../public/assets/images/skipthedishes.jpg";
import uberEatsImg from "../../public/assets/images/ubereats.jpg";
import doordashImg from "../../public/assets/images/doordash.jpg";
import callInImg from "../../public/assets/images/callinbutton.jpg";
import responsiveStyles from "../../app/styles/responsive/homepage.module.css";
import Image from "next/image";
const DeliveryAndPickup = () => {
  return (
    <Box bg="black" color="white">
      <Layout>
        <Flex mt={20} mb={20} justifyContent="center">
          <Flex
            gap={10}
            className={responsiveStyles.deliveryAndPickupSubContainer}
          >
            <Box maxWidth={450}>
              {" "}
              <SectionHeading content="Delivery and Pickup"></SectionHeading>
              <Text mt={3} fontFamily={"Open Sans"} fontSize={18} color="white">
                Get your order through your favorite food delivery service or
                simply for pickup.
              </Text>
            </Box>

            <Grid maxW={500} className={responsiveStyles.deliveryAndPickupGridContainer} gap={30}>
              <GridItem>
                <Box position="relative" height={70} width={210}>
                  <Image
                    fill={true}
                    src={skipTheDishesImg}
                    alt="skip the dishes"
                  ></Image>
                </Box>
              </GridItem>
              <GridItem>
                <Box position="relative" height={70} width={210}>
                  <Image fill={true} src={uberEatsImg} alt="uber eats"></Image>
                </Box>
              </GridItem>
              <GridItem>
                <Box position="relative" height={70} width={210}>
                  <Image fill={true} src={callInImg} alt="call in"></Image>
                </Box>
              </GridItem>
              <GridItem>
                <Box position="relative" height={70} width={210}>
                  <Image fill={true} src={doordashImg} alt="door dash"></Image>
                </Box>
              </GridItem>
            </Grid>
          </Flex>
        </Flex>
      </Layout>
    </Box>
  );
};

export default DeliveryAndPickup;
