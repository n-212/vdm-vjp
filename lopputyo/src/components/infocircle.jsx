import React from "react";
import { Box, Text } from "@chakra-ui/react";

const InfoCircle = ({ color, size, fontSize, title, text }) => { 

    return (
        <Box
          bg={color}
          w={`${size}px`}
          h={`${size}px`}
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
          <Text
            fontSize={`${fontSize}px`}
            fontWeight="semibold"
            lineHeight="1.3"
            maxW="80%"
            mb={6}
          >
            {title}
          </Text>
          <Text
            fontSize={`${fontSize * 0.8}px`}
            lineHeight="1.5"
            maxW="80%"
          >
            {text}
          </Text>
        </Box>
      );
    };



export default InfoCircle;