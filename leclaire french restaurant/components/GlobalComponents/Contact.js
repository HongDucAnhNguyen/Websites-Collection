import {
  Container,
  Box,
  Text,
  Flex,
  FormControl,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import Layout from "./Layout";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import forkImg from "../../public/assets/images/fork.jpg";
import tableKnifeImg from "../../public/assets/images/table_knife.jpg";
import styles from "../../app/styles/button.module.css";
import responsiveStyles from "../../app/styles/responsive/contactform.module.css";
import tableKnifeHorizontal from "../../public/assets/images/table-knife-right-aboutus.jpg";
import forkHorizontal from "../../public/assets/images/fork-right-aboutus.jpg";
const Contact = () => {
  return (
    <Box bg="#303030">
      <Layout>
        <Box className={responsiveStyles.tablewareContactSectionContainer} >
          <SectionHeading
            align="center"
            content="Let's stay in touch"
          ></SectionHeading>
          <Text
            textAlign="center"
            color="white"
            fontFamily="Open Sans"
            fontSize={18}
            mt={3}
          >
            Have a question? Send us a Message{" "}
          </Text>
          <Flex
            justifyContent="center"
            mt={5}
            className={responsiveStyles.contactTablewareFormContainer}
          >
            <Box>
              <Box
                position="relative"
                className={responsiveStyles.tablewareImg}
              >
                <Image fill={true} src={forkImg} alt="about"></Image>
              </Box>
            </Box>

            <Box>
              <Box
                position="relative"
                className={responsiveStyles.tablewareImgH}
              >
                <Image fill={true} src={forkHorizontal} alt="about"></Image>
              </Box>
            </Box>

            <Box height={350} width={350}>
              <form style={{ width: "100%" }}>
                <FormControl isRequired>
                  <Input
                    borderRadius="none"
                    bg="white"
                    size="lg"
                    type="email"
                    placeholder="Email"
                  />
                </FormControl>
                <FormControl isRequired>
                  <Input
                    mt={5}
                    borderRadius="none"
                    bg="white"
                    size="lg"
                    type="text"
                    placeholder="Subject"
                  />
                </FormControl>{" "}
                <FormControl isRequired>
                  <Textarea
                    height={150}
                    maxH={150}
                    mt={5}
                    borderRadius="none"
                    bg="white"
                    size="lg"
                    type="text"
                    placeholder="Message"
                  />
                </FormControl>
                <Flex mt={5} justifyContent="center">
                  {" "}
                  <Button
                    className={styles.btnContainer}
                    width="100%"
                    borderRadius="none"
                    color="white"
                    border="1px solid #DCB015"
                    mt={4}
                    fontFamily="Open Sans"
                    type="submit"
                    size="lg"
                    _hover={{ color: "#DCB015" }}
                  >
                    Send Message
                  </Button>
                </Flex>
              </form>
            </Box>
            <Box>
              <Box>
                <Box
                  position="relative"
                  className={responsiveStyles.tablewareImgH}
                >
                  <Image
                    fill={true}
                    src={tableKnifeHorizontal}
                    alt="about"
                  ></Image>
                </Box>
              </Box>

              <Box
                position="relative"
                className={responsiveStyles.tablewareImg}
              >
                <Image
                  fill={true}
                  src={tableKnifeImg}
                  alt="table knife"
                  title="tableware PNG Designed By 699pic from https://pngtree.com/freepng/knife_5637691.html?sol=downref&id=bef"
                ></Image>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  );
};

export default Contact;
