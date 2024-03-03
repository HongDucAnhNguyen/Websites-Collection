import { Box, Flex, Text } from "@chakra-ui/react";
import Layout from "../GlobalComponents/Layout";
import styles from "../../app/styles/aboutus.module.css";
import SectionHeading from "../GlobalComponents/SectionHeading";
const AboutUsHeroSection = () => {
  return (
    <Box>
      <Box className={styles.aboutUsHeroSection}>
        <Layout>
        
            <Flex alignItems="center" justifyContent="center" flexDirection="column">
              <SectionHeading
                size={64}
                align="center"
                content="About Us"
              ></SectionHeading>
              <Text
                align="center"
                color="white"
                fontFamily="Open Sans"
                fontSize={18}
                maxWidth={400}
              >
                Discover LeClaire: Where the timeless elegance of French
                tradition converges with culinary excellence in the heart of
                Calgary. 
              </Text>
            </Flex>
          
         
        </Layout>
      </Box>
    </Box>
  );
};

export default AboutUsHeroSection;
