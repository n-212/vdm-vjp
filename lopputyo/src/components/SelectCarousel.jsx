import SelectCard from "./SelectCard";
import { Provider, Carousel, LeftButton, RightButton } from "chakra-ui-carousel"
import { Box, Button, Stack, useBreakpointValue } from "@chakra-ui/react"
import feeds from "../feeds.json"
import { Link } from 'react-router-dom'



export default function SelectCarousel() {

    const responsiveGap = useBreakpointValue({
    base: 25,   // < 480px
    sm: 25,    // ≥ 480px
    md: 350,    // ≥ 768px
    xl: 350,    // ≥ 1280px
    //'2xl': 380  // ≥ 1536px
  });

  console.log(responsiveGap)

  return(
    <Box>
    <Provider p="0">
        <Carousel
        gap={responsiveGap} // Adjust gap as needed for mobile
        slidesPerView={1}
        showArrows={true}
        showDots={true}
        loop={false}
        maxWidth={"400px"}
        // You can add more props as needed for customization
        >
        {feeds.map((bubble) => (
            <Stack key={bubble.heading}>
                <SelectCard data={bubble} />
                <Button 
                as={Link} to={`/feed/${bubble.heading}`}
                bg="kuplassa.kupla3" 
                mx="30px" 
                width="80%" 
                mt="15px" 
                maxWidth={"334px"} 
                fontSize={"30px"} 
                padding={8} 
                borderRadius="15px"
                boxShadow={"lg"}
                color="black">SUKELLA KUPLAAN</Button>
            </Stack>
        ))}
        </Carousel>
        <LeftButton position={"absolute"} top="50%" left="8px" zIndex={2} width="40px" borderRadius="20px"/>
        <RightButton position={"absolute"} top="50%" right="8px" zIndex={2} width="40px" borderRadius="20px"/>
  </Provider>
  </Box>
)
}




