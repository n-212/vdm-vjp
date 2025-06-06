import { Card, Box, Image, Heading, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function SelectCard({ data }) {

  return (
    <Box width="100vw">
    <Link 
    to={`/feed/${data.heading}`}
    onClick={() => window.scrollTo(0, 0)}
    >
       <Card backgroundColor="kuplassa.kupla1" 
      borderRadius="15px" 
      p="8px" mx="30px" 
      width="80%" 
      maxHeight={"340px"} 
      maxWidth={"340px"} 
      aspectRatio="1 / 1">
        <Flex justifyContent="center">
          <Box
            backgroundColor={data.headingBackgroundColor}
            borderRadius="15px"
            padding="15px"
            width="fit-content"
            m="8px"
          >
            <Heading
              fontFamily="mono"
              fontWeight="500"
              fontSize="30px"
              textTransform="uppercase"
              color={data.headingColor}
              textAlign="center"
              px="12px"
            >
              {data.heading}
            </Heading>
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Image boxSize="100px" src={data.avatarSrc} m="8px" />
        </Flex>
        <Text mx="8px" fontSize="14px">
          {data.description}
        </Text>
      </Card>
      </Link>
    </Box>
  );
}