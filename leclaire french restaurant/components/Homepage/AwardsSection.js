import React from "react";
import Layout from "../GlobalComponents/Layout";
import { Box, Flex, OrderedList, ListItem } from "@chakra-ui/react";
import SectionHeading from "../GlobalComponents/SectionHeading";
import Image from "next/image";
import awardsImage from "../../public/assets/images/awards.jpg";
const AwardsSection = () => {
  return (
    <Box bg="black">
      <Layout>
        <Box maxWidth="1000" width="100%">
          <Flex gap={20} mt={20} mb={20} justifyContent="space-between">
            <Box position="relative" height={460} width={480}>
              <Image fill={true} src={awardsImage}></Image>
            </Box>
            <Box>
              <SectionHeading content="Awards" maxWidth={500}></SectionHeading>
              <OrderedList
                mt={5}
                spacing={10}
                color="white"
                fontSize={18}
                fontFamily="Open Sans"
                fontWeight="bold"
              >
                <ListItem>
                  "Best French Cuisine Experience" by Culinary Excellence
                  Magazine
                </ListItem>
                <ListItem>
                  "Distinguished Taste Award" from Gourmet World Association
                </ListItem>
                <ListItem>
                  {" "}
                  "Excellence in Culinary Innovation" by Foodie's Choice Awards
                </ListItem>
                <ListItem>
                  {" "}
                  "Top Fine Dining Destination" by Epicurean Gazette
                </ListItem>
              </OrderedList>
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  );
};

export default AwardsSection;
