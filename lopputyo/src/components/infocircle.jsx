import React from "react";
import { Box, Text } from "@chakra-ui/react";

const InfoCircle = ({ color, size, fontSize, title, text }) => { 

    return(
        <Box
        bg={color}
        w={`${size}px`}
        h={`${size}px`}
        borderRadius="50%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}  
        justifyContent="center" 
        boxShadow="md" 
        p={4} 
        textAlign="center" 

        
        >
            <Text
            fontSize={fontSize}
            fontFamily="sans-serif" 
            fontWeight="semibold"
            fontsize="lg" 
            color="black"
            w="100%"
            
            >
                {title}
            </Text>
            <Text 
            fontSize={fontSize*0.8}
            fontFamily="sans-serif" 
            fontsize="lg" 
            color="black"
            w="100%"
            >
                {text}
            </Text>
        </Box>
    )

}

export default InfoCircle;