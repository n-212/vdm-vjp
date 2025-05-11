import React from "react";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

const InfoCircle = ({ color, size, fontSize, title, text }) => {


  return (
    <Box
      transition="all 0.3s ease" 
      _hover={{
      transform: "scale(1.1)", 
        }}
      bg={color}
      w={size}
      h={size}
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
          fontSize={fontSize}
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
          fontSize={
            fontSize
              ? typeof fontSize === "object"
                ? Object.fromEntries(
                    Object.entries(fontSize).map(([k, v]) => [k, v * 0.8])
                  )
                : fontSize * 0.8
              : undefined
          }
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