import { Card, CardHeader, CardBody, Box, Image, Heading, Text, Flex } from '@chakra-ui/react'


export default function SelectCard() {
    return(
        <Card backgroundColor="kuplassa.kupla1" borderRadius={"15px"} p={"8px"} aspectRatio={"1 / 1"} m="30px">
            <Flex justifyContent={"center"}>
                <Box backgroundColor="black" borderRadius={"15px"} padding="15px" width="fit-content" m="8px">
                    <Heading fontFamily="mono" fontWeight={"500"} fontSize={"35px"} textTransform={"uppercase"} color="white" textAlign={"center"} px={"12px"}>salaliitto</Heading>
                </Box>
            </Flex>
            <Flex justifyContent={"center"}>
                <Image boxSize='100px' src="/hahmo.png" m="8px"/>
            </Flex>
            <Text mx="8px" fontSize="14px">
                Herää! Leo on nähnyt läpi verhon: maailmaa pyörittävät salaiset eliitit, algoritmit aivopesevät massoja, ja oikeat totuudet sensuroidaan. 
            </Text>
        </Card>
    )
}

