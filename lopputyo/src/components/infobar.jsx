import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const Infobar = ({ text, bg = "#8DB6CD", color = "black", size = 30}) => (
  <Box
    bg={bg}                // Background color (default from your image)
    borderRadius="2xl"     // Large, pill-like rounded corners
    px={8}                 // Horizontal padding
    py={2}                 // Vertical padding
    w={size}
    h={size / 4}            // Full width by default
    maxW="600px"           // Maximum width (adjust as needed)
    mx="auto"              // Center horizontally
    my={4}                 // Vertical margin
  >
    <Flex
      justify="center" // Space out the two texts
      align="center"          // Vertically center the text
      height="100%"
    >
      <Text
        fontFamily="monospace"
        fontSize="lg"
        color={color}
        textAlign="center"
      >
        {text}
      </Text>
    </Flex>
  </Box>
);

export default Infobar;