import SelectCard from "./SelectCard";
import { Provider, Carousel, LeftButton, RightButton } from "chakra-ui-carousel"
import { Box, Button, Stack } from "@chakra-ui/react"

const data = {
  heading: "salaliitto",
  headingBackgroundColor: "black",
  headingColor: "white",
  avatarSrc: "/hahmo.png",
  description: "Herää! Media valehtelee. ...",
};


const data1 = {
    heading: "ylikulutus",
    headingBackgroundColor: "black",
    headingColor: "white",
    avatarSrc: "/hahmo.png",
    description: "Herää! Media valehtelee. ...",
  };

const data2 = {
heading: "konservatiivi",
headingBackgroundColor: "black",
headingColor: "white",
avatarSrc: "/hahmo.png",
description: "Herää! Media valehtelee. ...",
};

const data3 = {
    heading: "hyvinvointi",
    headingBackgroundColor: "black",
    headingColor: "white",
    avatarSrc: "/hahmo.png",
    description: "Herää! Media valehtelee. ...",
  };

const bubbles = [data, data1, data3, data2]


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
        {bubbles.map((bubble) => (
            <>
            <Stack>
                <SelectCard key={bubble.heading} data={bubble} />
            </Stack>
            </>
        ))}
        </Carousel>
        <LeftButton position={"absolute"} top="50%" left="8px" zIndex={2} width="40px" borderRadius="20px"/>
        <RightButton position={"absolute"} top="50%" right="8px" zIndex={2} width="40px" borderRadius="20px"/>
  </Provider>
)

}




