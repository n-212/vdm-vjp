import Post from "../components/post"
import { Box, Flex, Show } from "@chakra-ui/react"
import Logo from "../components/Logo"
import { useParams } from "react-router-dom"
import feedPosts from "../feedPosts.json"
import SelectCarousel from "../components/SelectCarousel"



export default function FeedPage() {

    const { id } = useParams()

    const posts = feedPosts[id]

    return(
    <>
    <Show breakpoint="(min-width: 850px)">
        <Box position={"fixed"} top={5} left={5}>
            <Logo />
        </Box>
    </Show>
    
    <Flex justify={"center"} width={"100%"} backgroundColor={"kuplassa.background"}>
        <Box maxWidth={"540px"} backgroundColor="white">
            {posts.map( (currentPost, idx) => {
                return(
                    <Post post={currentPost} key={idx} />
                )
            })}
        </Box>
    </Flex>
    <Box maxWidth={"540px"} backgroundColor="white" margin={"auto"} >
        <Box maxWidth={"400px"} margin={"auto"} py={12}>
            <SelectCarousel remove={id}/>
        </Box>
    </Box>

    </>)
}

