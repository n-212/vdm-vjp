import { Box, Image } from "@chakra-ui/react"
import PostHeader from "./PostHeader"
import PostActions from "./PostActions"
import PostDescription from "./PostDescription"



export default function Post({ post }){
    return(
        <Box p={0} m={0}>
            <PostHeader username={"fitnesstee"}/>
            <Image src={post.picSrc} width="100%" objectFit="cover" />
            <PostActions />
            <PostDescription username={post.username} likes={post.likes} caption={post.description} />
        </Box>
    )
}