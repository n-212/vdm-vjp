import Post from "../components/post"
import { Box, Flex, Show } from "@chakra-ui/react"
import Logo from "../components/Logo"
import { useParams } from "react-router-dom"


const postExample = {
    username: "fitnesstee",
    picSrc: "/trump.jpg",
    likes: 1061,
    description: "Ensi viikolla Salatut elämät -sarjassa Salla kertoo Danielalle nähneensä Noelin toisen naisen seurassa. Myöhemmin Danielaa odottaa kotona yllätys.",
    comments: [
        {
            user: "möröjölli",
            text: "jee"

        },
        {
            user: "someprovokaattori",
            text: "on hyvä että naisen euro on 80 senttiä niin pysyy marssijärjestys"
        }
    ]
}

const postExample2 = {
    username: "fitnesstee",
    picSrc: "/avatar.jpeg",
    likes: 1061,
    description: "Ensi viikolla Salatut elämät -sarjassa Salla kertoo Danielalle nähneensä Noelin toisen naisen seurassa. Myöhemmin Danielaa odottaa kotona yllätys.",
    comments: [
        {
            user: "möröjölli",
            text: "jee"

        },
        {
            user: "someprovokaattori",
            text: "on hyvä että naisen euro on 80 senttiä niin pysyy marssijärjestys"
        }
    ]
}

const posts = [postExample, postExample2]

export default function FeedPage() {

    const { id } = useParams

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

    </>)
}

