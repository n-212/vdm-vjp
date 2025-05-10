import React from "react";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

const InfoCircle = ({ color, size, fontSize, title, text }) => {
  // Add responsive values
  const responsiveSize = useBreakpointValue({
    base: size,
    "2xl": size*1.2
  });

  const responsiveFontSize = useBreakpointValue({
    base: fontSize, 
    "2xl": fontSize*1.2
  });

  return (
    <Box
      transition="all 0.3s ease" 
      _hover={{
      transform: "scale(1.1)", 
        }}
      bg={color}
      w={`${responsiveSize}px`}
      h={`${responsiveSize}px`}
      borderRadius="full"
      position="relative"
      boxShadow="md"
      p={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      {title && (
        <Text
          fontSize={`${responsiveFontSize}px`}
          fontWeight="semibold"
          lineHeight="1.3"
          maxW="80%"
          mb={6}
        >
          {title}
        </Text>
      )}
      {text && (
        <Text
          fontSize={`${responsiveFontSize * 0.8}px`}
          lineHeight="1.5"
          maxW="80%"
        >
          {text}
        </Text>
      )}
    </Box>
  );
};

export default InfoCircle;