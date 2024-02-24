import { Text } from "@chakra-ui/react";
import React from "react";

const SectionHeading = ({ size, align, maxWidth, content }) => {
  return (
    <Text
      fontSize={size ? size : 48}
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
