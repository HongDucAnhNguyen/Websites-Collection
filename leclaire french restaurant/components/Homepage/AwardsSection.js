import React from "react";
import Layout from "../GlobalComponents/Layout";
import { Box, Flex, ListItem, List } from "@chakra-ui/react";
import SectionHeading from "../GlobalComponents/SectionHeading";
import Image from "next/image";
import awardsImage from "../../public/assets/images/awards.jpg";
import awardsIcon from "../../public/assets/images/awards_icon.jpg";
import responsiveStyles from "../../app/styles/responsive/homepage.module.css";

const AwardsSection = () => {
  return (
    <Box bg="black">
      <Layout>
        <Flex
          className={responsiveStyles.awardsSectionContainer}
          gap={20}
          mt={20}
          mb={20}
          justifyContent="space-between"
        >
          {" "}
          <Box
            maxWidth={480}
            className={responsiveStyles.awardsSectionSubContainer}
          >
            <Flex gap={5}>
              <Box position="relative" width={70} height={70}>
                <Image src={awardsIcon} fill alt="awards icon"></Image>
              </Box>

              <SectionHeading content="Awards"></SectionHeading>
              <Box position="relative" width={70} height={70}>
                <Image src={awardsIcon} fill alt="awards icon"></Image>
              </Box>
            </Flex>

            <List
              mt={10}
              spacing={10}
              color="white"
              fontSize={18}
              fontFamily="Open Sans"
              fontWeight="bold"
            >
              <ListItem>
                "Best French Cuisine Experience" by Culinary Excellence Magazine
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
            </List>
          </Box>
          <Box position="relative" className={responsiveStyles.awardsImage}>
            <Image alt="awards img" fill={true} src={awardsImage}></Image>
          </Box>
        </Flex>
      </Layout>
    </Box>
  );
};

export default AwardsSection;
