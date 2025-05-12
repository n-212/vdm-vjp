import { Box, Image } from "@chakra-ui/react"
import PostHeader from "./PostHeader"
import PostActions from "./PostActions"
import PostDescription from "./PostDescription"
import PostComments from "./PostComments"


export default function Post({ post }){
    return(
        <Box p={0} m={0} mb={2}>
            <PostHeader username={post.username}/>
            <Image src={post.picSrc} width="100%" objectFit="cover" />
            <PostActions />
            <PostDescription username={post.username} likes={post.likes} caption={post.description} />
            <PostComments comments={post.comments} />
        </Box>
    )
}