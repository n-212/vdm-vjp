import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

// Komponentti, jossa firman somet. Responsiivinen itsestään, ei propseja.

const ContactsBox = () => (
    <Box
      position="fixed"
      left="50%"
      bottom="0"
      transform="translateX(-50%)"
      bg="#1d2546"
      borderRadius="2xl"
      width="100vw"
      maxW={{ sm: "95vw", lg: "600px" }} // max leveys responsiivinen
      mx="auto"
      mb={4}
      boxShadow="md"
      zIndex={1000}
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        height="100%"
      >
        <Text
          fontFamily="monospace"
          fontSize={{ sm: "14px", lg: "18px" }} // responsiivinen fontti. 
          color="white"
          textAlign="center"
          mb={1}
        >
          Helsingin Sanomat
        </Text>
        <Text
          fontFamily="monospace"
          fontSize={{ sm: "12px", lg: "16px" }} //responsiivinen fontti 
          color="white"
          textAlign="center"
        >
          Puh: 09 1221 | Sähköposti: hs.kotimaa@hs.fi
        </Text>
        <Text
          fontFamily="monospace"
          fontSize={{ sm: "12px", lg: "16px" }}
          color="white"
          textAlign="center"
        >
          Osoite: Töölönlahdenkatu 2, Helsinki
        </Text>
      </Flex>
    </Box>
  );

export default ContactsBox;