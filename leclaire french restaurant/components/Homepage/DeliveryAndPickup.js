import { Box, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../GlobalComponents/Layout";
import SectionHeading from "../GlobalComponents/SectionHeading";
import skipTheDishesImg from "../../public/assets/images/skipthedishes.jpg";
import uberEatsImg from "../../public/assets/images/ubereats.jpg";
import doordashImg from "../../public/assets/images/doordash.jpg";
import callInImg from "../../public/assets/images/callinbutton.jpg";
import Image from "next/image";
const DeliveryAndPickup = () => {
  return (
    <Box bg="black" color="white">
      <Layout>
       
          <Flex mt={20} mb={20} justifyContent="space-between">
            <Box>
              {" "}
              <SectionHeading
                maxWidth={500}
                content="Delivery and Pickup"
              ></SectionHeading>
              <Text
                mt={3}
                maxW={300}
                fontFamily={"Open Sans"}
                fontSize={18}
                color="white"
              >
                Get your order through your favorite food delivery service or
                simply for pickup.
              </Text>
            </Box>

            <Grid templateColumns="repeat(2, 1fr)" gap={50}>
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
                  <Image
                    fill={true}
                    src={uberEatsImg}
                    alt="skip the dishes"
                  ></Image>
                </Box>
              </GridItem>
              <GridItem>
                <Box position="relative" height={70} width={210}>
                  <Image
                    fill={true}
                    src={callInImg}
                    alt="skip the dishes"
                  ></Image>
                </Box>
              </GridItem>
              <GridItem>
                <Box position="relative" height={70} width={210}>
                  <Image
                    fill={true}
                    src={doordashImg}
                    alt="skip the dishes"
                  ></Image>
                </Box>
              </GridItem>
            </Grid>
          </Flex>
        
      </Layout>
    </Box>
  );
};

export default DeliveryAndPickup;
