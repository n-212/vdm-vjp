import SelectCard from "../components/SelectCard"
import { Flex, Box } from "@chakra-ui/react"
import Logo from "../components/Logo"
import SelectCarousel from "../components/SelectCarousel"


export default function SelectPage(){
    return(
        <>
        <Box position={"fixed"} top={5} left={5}>
            <Logo width="60px"/>
        </Box>
        <Box position="absolute" 
                top="-50%" 
                transform="translate(0%, 50%)"
                width="100%">
            <SelectCarousel />
        </Box>        
        </>
    )
}