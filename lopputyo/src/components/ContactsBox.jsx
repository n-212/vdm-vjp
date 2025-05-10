import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const ContactsBox = () => (
    <Box
      position="fixed"
      left="50%"
      bottom="0"
      transform="translateX(-50%)"
      bg="#CEDFE6"
      borderRadius="2xl"
      width="100vw"
      maxW="600px"
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
          fontSize="14"
          color="black"
          textAlign="center"
          mb={1}
        >
          Yritys Oy
        </Text>
        <Text
          fontFamily="monospace"
          fontSize="12"
          color="black"
          textAlign="center"
        >
          Puh: 040 123 4567 | Sähköposti: info@yritys.fi
        </Text>
        <Text
          fontFamily="monospace"
          fontSize="12"
          color="black"
          textAlign="center"
        >
          Osoite: Esimerkkikatu 1, 00100 Helsinki
        </Text>
      </Flex>
    </Box>
  );

export default ContactsBox;