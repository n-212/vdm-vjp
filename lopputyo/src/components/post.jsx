import { Box, Image } from "@chakra-ui/react"
import PostHeader from "./PostHeader"
import PostActions from "./PostActions"



export default function Post(){
    return(
        <Box p={0} m={0}>
            <PostHeader />
            <Image src={"/avatar.jpeg"} width="100%" objectFit="cover" />
            <PostActions />
        </Box>
    )
}