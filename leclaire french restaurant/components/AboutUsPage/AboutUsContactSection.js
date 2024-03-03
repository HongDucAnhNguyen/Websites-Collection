import { Box, Text, Button, Flex } from "@chakra-ui/react";
import Layout from "../GlobalComponents/Layout";
import Link from "next/link";
import Image from "next/image";
import forkImgLayRight from "../../public/assets/images/fork-right-aboutus.jpg";
import tableKnifeImgLayRight from "../../public/assets/images/table-knife-right-aboutus.jpg";
import SectionHeading from "../GlobalComponents/SectionHeading";
import btnStyles from "../../app/styles/button.module.css";

const AboutUsContactSection = () => {
  return (
    <Box bg="#303030">
      <Layout>
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          mt={10}
          mb={10}
        >
          <SectionHeading
            content="Book a Reservation"
            align="center"
          ></SectionHeading>
          <Text mt={5} color="white" fontFamily="Open Sans" fontSize={18}>
            Get in touch with us today
          </Text>
          <Box>
            {" "}
            <Box position="relative" height={150} width={250}>
              <Image fill={true} src={forkImgLayRight} alt="fork-right"></Image>
            </Box>
          </Box>

          <Link href="/contact">
            {" "}
            <Button
              className={btnStyles.btnContainer}
              size="lg"
              color="white"
              border="1px solid #DCB015"
              borderRadius="none"
              _hover={{ color: "#DCB015" }}
              fontFamily="Open Sans"
            >
              <Text fontFamily="Open Sans" fontSize={18}>
                Contact Us
              </Text>
            </Button>
          </Link>
          <Box position="relative" height={150} width={270}>
            <Image
              fill={true}
              src={tableKnifeImgLayRight}
              alt="knife-right"
            ></Image>
          </Box>
        </Flex>
      </Layout>
    </Box>
  );
};

export default AboutUsContactSection;
