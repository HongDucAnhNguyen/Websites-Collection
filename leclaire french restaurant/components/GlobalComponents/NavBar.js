"use client";

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
import InstaIcon from "../IconComponents/InstaIcon";
import FaceBookIconOutline from "../IconComponents/FaceBookIconOutline";
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavBar = () => {
  return (
    <Box pt={5} pb={5} bg="black" color="white">
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

          <Flex alignItems="center" className={styles.navLinks} gap={10}>
            <Link href="/menu">
              <Text
                _hover={{
                  cursor: "pointer",
                  color: "#dcb015",
                  transition: ".3s",
                }}
              >
                Menu
              </Text>
            </Link>
            <Menu>
              <MenuButton
                _hover={{
                  cursor: "pointer",
                  color: "#dcb015",
                  transition: ".3s",
                }}
                as={Box}
                bg="black"
                color="white"
              >
                <Flex gap={2} alignItems="center" >
                  <Text fontFamily="Open Sans" fontSize="large">
                    Services
                  </Text>
                  <ChevronDownIcon fontSize="large"></ChevronDownIcon>
                </Flex>
              </MenuButton>
              <MenuList border="none" bg="black" as={Box}>
                <MenuItem
                  _hover={{ bg: "#dcb015", color: "white" }}
                  bg="black"
                  color="white"
                >
                  <Link href="/services">
                    <Text>All Services</Text>
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#dcb015", color: "white" }}
                  bg="black"
                  color="white"
                >
                  <Link href="/services/private-room">
                    <Text>Private Room Reservation</Text>
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#dcb015", color: "white" }}
                  bg="black"
                  color="white"
                >
                  <Link href="/services/large-groups">
                    <Text>Large Groups Reservation</Text>
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "#dcb015", color: "white" }}
                  bg="black"
                  color="white"
                >
                  <Link href="/services/weddings">
                    <Text>Weddings Reservation</Text>
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
              >
                Contact
              </Text>
            </Link>
            <Flex gap={3}>
              <Link href="/">
                <FaceBookIconOutline></FaceBookIconOutline>
              </Link>
              <Link href="/">
                <InstaIcon></InstaIcon>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </Box>
  );
};

export default NavBar;
