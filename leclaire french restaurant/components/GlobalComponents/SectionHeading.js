import { Text } from "@chakra-ui/react";
import React from "react";

const SectionHeading = ({ size, align, maxWidth, content }) => {
  return (
    <Text
      fontSize={{
        lg: size ? size : 48,
        md: size ? size : 48,
        base: size == 64 ? 45 : 35,
      }}
      color="#DCB015"
      fontFamily={"Jacques"}
      maxWidth={maxWidth ? maxWidth : ""}
      margin={0}
      textAlign={align ? align : ""}
    >
      {content}
    </Text>
  );
};

export default SectionHeading;
