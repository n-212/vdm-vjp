import SelectCard from "./SelectCard";
import { Provider, Carousel, LeftButton, RightButton } from "chakra-ui-carousel"
import { Box, Button, Stack } from "@chakra-ui/react"
import feeds from "../feeds.json"


export default function SelectCarousel() {
    return(
    <Provider>
        <Carousel
        gap={25} // Adjust gap as needed for mobile
        slidesPerView={1}
        showArrows={true}
        showDots={true}
        loop={false}
        // You can add more props as needed for customization
        >
        {feeds.map((bubble) => (
            <>
            <Stack>
                <SelectCard key={bubble.heading} data={bubble} />
                <Button bg="kuplassa.kupla3" mx="30px" width="80%" mt="15px" maxWidth={"450px"} fontSize={"30px"} padding={8} borderRadius="15px" color="black">SUKELLA KUPLAAN</Button>
            </Stack>
            </>
        ))}
        </Carousel>
        <LeftButton position={"absolute"} top="50%" left="8px" zIndex={2} width="40px" borderRadius="20px"/>
        <RightButton position={"absolute"} top="50%" right="8px" zIndex={2} width="40px" borderRadius="20px"/>
  </Provider>
)
}




