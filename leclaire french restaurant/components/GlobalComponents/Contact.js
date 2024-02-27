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

const Contact = () => {
  return (
    <Box bg="#303030">
      <Layout>
        <Box maxWidth="1000" width="100%">
          <Box mt={20} mb={20}>
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
              Subscribe to our news letter
            </Text>
            <Flex justifyContent="center" mt={5}>
              <Box position="relative" height={350} width={250}>
                <Image fill={true} src={forkImg} alt="about"></Image>
              </Box>
              <Box height={350} width={350}>
                <Flex height="100%" width="100%" alignItems="center">
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
                </Flex>
              </Box>

              <Box position="relative" height={350} width={250}>
                <Image
                  fill={true}
                  src={tableKnifeImg}
                  alt="table knife"
                  title="tableware PNG Designed By 699pic from https://pngtree.com/freepng/knife_5637691.html?sol=downref&id=bef"
                ></Image>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Contact;
