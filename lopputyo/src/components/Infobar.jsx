import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const Infobar = ({ text, bg = "#8DB6CD", color = "black", size = 30}) => (
  <Box
    transition="all 0.3s ease" 
    _hover={{
    transform: "scale(1.1)", 
    }}
    bg={bg}               
    borderRadius="2xl"    
    px={8}                 
    py={2}                
    w={size}
    h={size / 4}            
    maxW="600px"           
    mx="auto"              
    my={4}                 
  >
    <Flex
      justify="center"
      align="center"          
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
