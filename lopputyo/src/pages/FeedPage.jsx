import Post from "../components/post"
import { Box, Flex } from "@chakra-ui/react"


const postExample = {
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

const posts = [postExample, postExample]

export default function FeedPage() {
    return(
    <>
    <Flex justify={"center"} width={"100%"}>
        <Box maxWidth={"540px"}>
            {posts.map( currentPost => {
                return(
                    <Post post={currentPost} />
                )
            })}
        </Box>
    </Flex>

    </>)
}

