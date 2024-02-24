import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  IconButton,
  Text,
  Image,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";
import Layout from "./Layout";
import styles from "../../app/styles/navbar.module.css";
import FaceBookIconOutline from "../IconComponents/FaceBookIconOutline";
import InstaIcon from "../IconComponents/InstaIcon";
const NavBar = () => {
  return (
    <Container maxHeight={200}>
      <Layout>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1000"
          width="100%"
        >
          <Box ml={30} className={styles.Logo}>
            <Link href="/">
              <Heading fontSize={32} fontFamily={"Open Sans"}>
                Leclaire
              </Heading>
            </Link>
          </Box>

          <Flex mr={50} className={styles.navLinks} gap={50}>
            <Link href="/menu">
              <Text
                ml={10}
                _hover={{
                  cursor: "pointer",
                  color: "#dcb015",
                  transition: ".3s",
                }}
              >
                Menu
              </Text>
            </Link>
            <Menu className={styles.menuLinks}>
              <MenuButton
                _hover={{
                  cursor: "pointer",
                  color: "#dcb015",
                  transition: ".3s",
                }}
                as={Box}
                color="white"
              >
                {" "}
                <Text fontFamily="Open Sans" ml={10}>
                  Services
                </Text>
              </MenuButton>
              <MenuList minWidth="240px" minHeight="200px">
                <MenuItem
                  _hover={{ bg: "#dcb015", color: "white" }}
                  as={Box}
                  bg="black"
                  color="white"
                >
                  <Link href="/services">
                    <Text ml={10}>All Services</Text>
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#dcb015", color: "white" }}
                  as={Box}
                  bg="black"
                  color="white"
                >
                  <Link href="/services/private-room">
                    <Text ml={10}>Private Room Reservation</Text>
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#dcb015", color: "white" }}
                  as={Box}
                  bg="black"
                  color="white"
                >
                  <Link href="services/large-groups">
                    <Text ml={10}>Large Groups Reservation</Text>
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#dcb015", color: "white" }}
                  as={Box}
                  bg="black"
                  color="white"
                >
                  <Link href="services/weddings">
                    <Text ml={10}>Weddings Reservation</Text>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Link href="/about">
              <Text
                _hover={{
                  cursor: "pointer",
                  color: "#dcb015",
                  transition: ".3s",
                }}
                ml={10}
              >
                About
              </Text>
            </Link>
            <Link href="/contact">
              <Text
                _hover={{
                  cursor: "pointer",
                  color: "#dcb015",
                  transition: ".3s",
                }}
                ml={10}
              >
                Contact
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Layout>
    </Container>
  );
};

export default NavBar;
