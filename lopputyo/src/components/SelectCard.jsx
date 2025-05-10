import { Card, CardBody, Box, Image, Heading, Text, Flex } from '@chakra-ui/react'




export default function SelectCard({ bubble }) {
    return(
        <Card backgroundColor="kuplassa.kupla1" borderRadius={"15px"} p={"8px"} aspectRatio={"1 / 1"} m="30px">
            <Flex justifyContent={"center"}>
                <Box backgroundColor={bubble.headingBackgroundColor} borderRadius={"15px"} padding="15px" width="fit-content" m="8px">
                    <Heading fontFamily="mono" fontWeight={"500"} fontSize={"35px"} textTransform={"uppercase"} color={bubble.headingTextColor} textAlign={"center"} px={"12px"}>
                        {bubble.heading}
                    </Heading>
                </Box>
            </Flex>
            <Flex justifyContent={"center"}>
                <Image boxSize='100px' src={bubble.avatarSrc} m="8px"/>
            </Flex>
            <Text mx="8px" fontSize="14px">
                {bubble.description}
            </Text>
        </Card>
    )
}

