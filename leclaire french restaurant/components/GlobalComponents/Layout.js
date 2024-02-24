import { Container, Flex } from "@chakra-ui/react";
import React from "react";

const Layout = ({ children, direction }) => {
  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection={direction ? direction : "row"}
    >
      {children}
    </Flex>
  );
};

export default Layout;
