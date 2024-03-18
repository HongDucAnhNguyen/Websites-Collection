"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Menu,
  MenuItem,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import Layout from "./Layout";
import styles from "../../app/styles/navbar.module.css";

import { FaFacebook, FaInstagram } from "react-icons/fa";

import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const NavBar = () => {
  const [mouseIsOnMenuList, setMouseIsOnMenuList] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navBarSticky, setNavbarSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < prevScrollPos && prevScrollPos > 100) {
        setNavbarSticky(true);
      } else {
        setNavbarSticky(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, navBarSticky]);

  return (
    <Box
      position={navBarSticky ? "fixed" : "block"}
      top={navBarSticky ? "-80px" : ""}
      transition={navBarSticky ? "0.5s ease-in-out" : ""}
      transform={navBarSticky ? "translateY(80px)" : ""}
      zIndex={navBarSticky ? "900" : ""}
      bg="black"
      width="100%"
      pt={5}
      pb={5}
      color="white"
    >
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
          <Box height="100%" margin="0" padding="0" className={styles.navLinks}>
            <Flex alignItems="center" gap={10}>
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

              <Box>
                <Menu>
                  <Box
                    height="100%"
                    margin={0}
                    padding={0}
                    onMouseEnter={() => {
                      setOpenMenu(true);
                    }}
                    onMouseLeave={() => setOpenMenu(false)}
                    _hover={{
                      cursor: "pointer",
                      color: "#dcb015",
                      transition: ".3s",
                    }}
                    bg="black"
                    color="white"
                  >
                    <HStack alignItems="center" gap={2}>
                      <Text fontFamily="Open Sans" fontSize="large">
                        Services
                      </Text>
                      <FaChevronDown fontSize="small"></FaChevronDown>
                    </HStack>
                  </Box>

                  <Box
                    display={openMenu ? "visible" : "none"}
                    position="absolute"
                    onMouseEnter={() => {
                      setOpenMenu(true);
                    }}
                    onMouseLeave={() => {
                      setOpenMenu(false);
                    }}
                    border="none"
                  >
                    <MenuItem
                      _hover={{
                        bg: "#dcb015",
                        color: "white",
                        transition: "0.2s ease-in-out",
                      }}
                      color="white"
                      bg="black"
                    >
                      <Link href="/services">
                        <Text>All Services</Text>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      _hover={{
                        bg: "#dcb015",
                        color: "white",
                        transition: "0.2s ease-in-out",
                      }}
                      bg="black"
                      color="white"
                    >
                      <Link href="/services/private-room">
                        <Text>Private Room Reservation</Text>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      _hover={{
                        bg: "#dcb015",
                        color: "white",
                        transition: "0.2s ease-in-out",
                      }}
                      bg="black"
                      color="white"
                    >
                      <Link href="/services/large-groups">
                        <Text>Large Groups Reservation</Text>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      _hover={{
                        bg: "#dcb015",
                        color: "white",
                        transition: "0.2s ease-in-out",
                      }}
                      bg="black"
                      color="white"
                    >
                      <Link href="/services/weddings">
                        <Text>Weddings Reservation</Text>
                      </Link>
                    </MenuItem>
                  </Box>
                </Menu>
              </Box>
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
                  <FaFacebook color="#dcb015"></FaFacebook>
                </Link>
                <Link href="/">
                  <FaInstagram color="#dcb015"></FaInstagram>
                </Link>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Layout>
    </Box>
  );
};

export default NavBar;
