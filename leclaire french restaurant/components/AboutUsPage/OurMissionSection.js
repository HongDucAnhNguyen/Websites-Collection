import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Layout from "../GlobalComponents/Layout";
import SectionHeading from "../GlobalComponents/SectionHeading";
import ourMissionImg from "../../public/assets/images/our_mission.jpg";
import Link from "next/link";
import btnStyles from "../../app/styles/button.module.css";
import Image from "next/image";
const OurMissionSection = () => {
  return (
    <Box bg="black">
      <Layout>
       
          <Flex gap={20} mt={20} mb={20}>
            <Box position="relative" height={460} width={480}>
              <Image
              style={{objectFit:"cover"}}
                fill={true}
                src={ourMissionImg}
                alt="our story img"
              ></Image>
            </Box>
            <Box maxWidth={400}>
              <SectionHeading content="Our Mission"></SectionHeading>
              <Text mt={5} color="white" fontFamily="Open Sans" fontSize={18}>
                LeClaire embodies the essence of French culinary artistry,
                infusing every dish with a harmonious blend of tradition and
                innovation.
              </Text>
              <Text mt={5} color="white" fontFamily="Open Sans" fontSize={18}>
                Our commitment to excellence resonates in every aspect of our
                service
              </Text>
              <Text mt={5} color="white" fontFamily="Open Sans" fontSize={18}>
                With passion as our compass and quality as our cornerstone, we
                invite you to savor unforgettable moments at LeClaire, where
                every meal is a celebration of culinary mastery.
              </Text>
              <Link href="/menu">
                {" "}
                <Button
                  className={btnStyles.btnContainer}
                  mt={10}
                  size="lg"
                  color="white"
                  border="1px solid #DCB015"
                  borderRadius="none"
                  _hover={{ color: "#DCB015" }}
                  fontFamily="Open Sans"
                >
                  <Text fontFamily="Open Sans" fontSize={18}>
                    View Menu
                  </Text>
                </Button>
              </Link>
            </Box>
          </Flex>
        
      </Layout>
    </Box>
  );
};

export default OurMissionSection;
